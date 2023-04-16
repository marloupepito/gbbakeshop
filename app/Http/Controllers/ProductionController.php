<?php

namespace App\Http\Controllers;
use App\Models\Production;
use Illuminate\Http\Request;
use App\Models\BranchIngredients;
use App\Models\BranchBread;
use Illuminate\Support\Facades\DB;
class ProductionController extends Controller
{
    public function edit_branch_ingredients(Request $request){
        BranchIngredients::where('id','=',$request->id)
        ->update([
            'ingredients_name' =>$request->data['product'],
            'ingredients_quantity' =>$request->data['quantity'],
            'notify'  =>$request->data['notification'],
            'bind_name'  =>$request->data['bundle'],
        ]);
    }
       public function get_all_production(Request $request){
            $data = Production::where('branch_id','=',$request->id)->get()->unique('random_id');
             return response()->json([
                'status' =>  $data,
            ]);
       }

       public function get_production_code(Request $request){
          $data = Production::where('random_id','=',$request->randomid)->get();
          $result = DB::table('production')
            ->join('branch_ingredients', 'production.branch_ingredients_id', '=', 'branch_ingredients.id')
            ->where('random_id','=',$data[0]->random_id)
            ->get();
           return response()->json([
              'status' => $result,
          ]);
     }
     
       
    public function add_branch_ingredients(Request $request){
     $codename = $request->code;
     $branchid =$request->branchid;
     $breadname =$request->data['breadname'];
     $productionquantity =$request->data['productionquantity'];
     $random =rand(1000000,9999999);

     $breadId= BranchBread::where([['branch_id','=',$branchid],['bread_name','=',strtoupper($breadname)]])->first();

     $branching = BranchIngredients::where([['branch_id','=',$branchid],['ingredients_name','=','Flour']])->first();


      Production::create(
               [
                    'branch_id' => $branchid,
                    'branch_ingredients_id' => $branching->id,
                    'branch_bread_id' => $breadId->key,
                    'random_id' => $random,
                    'code_name' => $codename,
                    'bind' =>$request->data['bind'],
                    'bread_name' =>strtoupper($breadname),
                    'ingredients_name' =>'Flour',
                    'quantity'=>$request->data['quantity'],
                    'production_quantity'=>$productionquantity
               ]
          );

     for ($i=0; $i < count($request->data['users']); $i++) { 
          
          Production::create(
               [
                    'branch_id' => $branchid,
                    'branch_ingredients_id' => explode("|",$request->data['users'][$i]['ingredients'])[1],
                    'branch_bread_id' => $breadId->key,
                    'random_id' => $random,
                    'code_name' => $codename,
                    'bind' =>$request->data['users'][$i]['bind'],
                    'bread_name' =>strtoupper($breadname),
                    'ingredients_name' =>explode("|",$request->data['users'][$i]['ingredients'])[0],
                    'quantity'=>$request->data['users'][$i]['quantity'],
                    'production_quantity'=>$productionquantity
               ]
          );
     }
    
     return response()->json([
         'status' => 'success'
     ]);
 }
}
