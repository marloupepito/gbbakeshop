<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IngredientsRequest;
use App\Models\BranchIngredients;
use App\Models\User;
class IngredientsRequestController extends Controller
{
    public function delete_ingredients_request(Request $request){
        IngredientsRequest::where('key','=',$request->id)->delete();
        return response()->json([
            'status' =>'success'
        ]);
    }
    public function send_request_form(Request $request){
        
        $request_id =rand(1000000000,9999999999);
       

        for ($i=0; $i < count($request->data); $i++) { 
            $ing = BranchIngredients::where([['branch_id','=',$request->branchid],['ingredients_name','=',$request->data[$i]]])->first();
            
             $ingredients = new IngredientsRequest;
             $ingredients->branch_id = $request->branchid;
             $ingredients->request_id = $request_id;
             $ingredients->ingredients_id = $ing->id;
             $ingredients->ingredients_bind = $ing->bind_name;
             $ingredients->ingredients_name = $request->data[$i];
             $ingredients->ingredients_status = 'Pending';
             $ingredients->save();
        }
         return response()->json([
                'status' =>'success'
            ]);
    }
     public function get_request_from_branch(Request $request){

             $limit = ($request->current * $request->pageSize) +1;

             $delivery = IngredientsRequest::where([['branch_id','=' ,$request->branchid],['ingredients_status','=' ,$request->status]])->get()->unique('request_id');
                       return response()->json([
                        'status' => $delivery,
                    ]);
             

     }
      public function get_only_current_branch_request(Request $request){

             $request->validate([
                'id'=>['required'],
                'search'=>['required'],
             ]);

              $request = IngredientsRequest::where([['branch_id','=',$request->id],['request_id','=',$request->search]])->get();

               return response()->json([
                'status' => $request
            ]);
     }
       public function accept_request_ingredients(Request $request){

             $request->validate([
                'response'=>['required'],
                'branchid'=>['required'],
                'requestid'=>['required'],
             ]);

             if($request->response === 'Delivered'){
                for ($i=0; $i < count($request->quantity); $i++) { 
                        IngredientsRequest::where([['key','=',$request->key[$i]],['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])
                ->update([
                    'ingredients_status' => $request->response,
                    'ingredients_quantity' => $request->quantity[$i],
                    ]);
                }
                
             }else if($request->response === 'Received'){
                
                $a = IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])->get();
                   
                for ($i=0; $i < count($a); $i++) { 
                    $b = BranchIngredients::where('id',$a[$i]->ingredients_id)->first();
                     BranchIngredients::where('id',$a[$i]->ingredients_id)
                     ->update([
                        'ingredients_quantity' => $a[$i]->ingredients_quantity + $b->ingredients_quantity,
                      ]);
                }
                
                    IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])
                    ->update([
                      'ingredients_status' => $request->response,
                    ]);

             }
           
             return response()->json([
                'status' => 'success'
            ]);

            // $ingredients = IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])->get();
            
     }

     public function get_ingredients_list(Request $request){
        $ingredients = IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])->get();
        return response()->json([
            'status' => $ingredients
        ]);
     }
}
