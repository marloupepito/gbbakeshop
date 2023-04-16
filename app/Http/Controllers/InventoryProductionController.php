<?php

namespace App\Http\Controllers;
use App\Models\InventoryProduction;
use App\Models\Production;
use Illuminate\Http\Request;
use App\Models\BranchIngredients;
use App\Models\BranchBread;
use App\Models\BranchBreadSold;
use App\Models\BranchBreadOut;
use App\Models\Records;
use App\Models\Charges;
class InventoryProductionController extends Controller
{

  

  public function goto_bread_report(Request $request){

    $record = Records::where('key', $request->id)->first();

    // $alltotal = $request->production;
    // $charge = $request->charge;
    $remaining = $request->production + $record->beginning;
  
    if($request->charge !== 0){
      Charges::create([
        'branch_id'=>$record->branch_id,
        'userid'=>$record->userid,
        'name' =>$record->baker,
        'description' =>$request->remarks,
        'amount' =>$request->charge * $record->price,
        'date' =>$request->date,
      ]);
    }

    Records::where('key', $request->id)->update([
      'remark2' =>$request->remarks,
      'production' =>$request->production,
      'charge' =>$request->charge,
      'overs' =>$request->overs,
      'status' =>'breads',
      'assigned1' =>$request->assigned,
      'total' =>$record->remaining+$remaining,
    ]);

  }
  public function add_bread_list(Request $request){
        
        

        $target=$request->target;
        $actualTarget=$request->actualTarget;


          for ($i=0; $i < count($request->data); $i++) { 
              $branchIngredientId = $request->data[$i]['branch_ingredients_id'];
        
              $remaining = BranchIngredients::where('id',$branchIngredientId)->first();
              // $equal = $remaining->ingredients_quantity - $request->data[$i]['quantity'];
              //res.bind === 'Grams'?res.quantity-(parseInt(res.quantity) / 1000):res.ingredients_quantity-res.quantity
              $equal =$request->data[$i]['bind'] === 'Grams'?
              $request->data[$i]['ingredients_quantity']-(($request->data[$i]['quantity'] / 1000) * $request->quantity):
              $request->data[$i]['ingredients_quantity']-($request->data[$i]['quantity'] * $request->quantity);

              BranchIngredients::where('id',$branchIngredientId)
              ->update(['ingredients_quantity' => $equal]);
          }

     $date= date("F d, Y A");

        $bread=BranchBread::where([['branch_id','=',$request->branchid],['key','=',$request->data[0]['branch_bread_id']]])->first();

        $beginning = Records::where([['date','=',$date],['branch_id','=',$request->branchid],['bread_id','=',$request->data[0]['branch_bread_id']]])->orderBy('created_at','DESC')->first();


        $checkExist =  Records::where([['remember_token','=',null],['branch_id','=',$request->branchid],['bread_id','=',$request->data[0]['branch_bread_id']]])->orderBy('created_at','DESC')->first();




        if ($beginning === null) {

          if($checkExist !== null){
              Records::where([['remember_token','=',null],['bread_id','=',$request->data[0]['branch_bread_id']],['branch_id','=',$request->branchid]])->update([
                'total' =>$checkExist->total+$target,
                'baker_id' =>$request->baker_id,
                'production' =>$checkExist->production+$target,
                'charge' => ($target - $actualTarget) < 0?0:$target - $actualTarget,
                'overs' => ($actualTarget - $target) < 0?0:$actualTarget - $target,
                'remark1' =>$request->remarks,
                'baker' => $request->baker,
                'target' =>$target,
                'kilo' =>$request->quantity
              ]);
              return response()->json([
                  'status' =>$checkExist
              ]);
          }else{
            
              $records = new Records;
              $records->branch_id = $request->branchid;
              $records->baker_id = $request->baker_id;
              $records->bread_id = $request->data[0]['branch_bread_id'];
              $records->bread_name =$request->data[0]['bread_name'];
              $records->beginning = $beginning === null?0:$beginning->remaining;
              $records->production = $actualTarget;
              $records->baker = $request->baker;
              $records->target = $target;
              $records->kilo = $request->quantity;
              $records->remark1 = $request->remarks;
              $records->charge = ($target - $actualTarget) < 0?0:$target - $actualTarget;
              $records->overs = ($actualTarget - $target) < 0?0:$actualTarget - $target;
              $records->price = $bread->price;
              $records->total = $beginning === null? $actualTarget:$beginning->remaining+ $actualTarget;
              $records->date = $request->date;
              $records->date2 =date('m-d-y');
              $records->save();
              return response()->json([
                  'status' =>$beginning
              ]);
          }
            
        }else{

             Records::where('key',$checkExist->key)->update([
                'total' =>$checkExist->beginning+$actualTarget,
                'baker_id' =>$request->baker_id,
                'production' =>$actualTarget,
                'remark1' =>$request->remarks,
                'baker' => $request->baker,
                'charge' => ($target - $actualTarget) < 0?0:$target - $actualTarget,
                'overs' => ($actualTarget - $target) < 0?0:$actualTarget - $target,
                'target' =>$target,
                'kilo' =>$request->quantity
              ]);
              return response()->json([
                  'status' =>$checkExist
              ]);

        }
      

     }

     public function get_branch_bread_sold(Request $request){
        $limit = ($request->current * $request->pageSize) +1;
        $bread = BranchBreadSold::where('branch_id','=',$request->branchid)->simplePaginate($limit);
        return response()->json([
            'status' =>$bread
        ]);
     }

     public function get_branch_bread_out(Request $request){
        $limit = ($request->current * $request->pageSize) +1;
        $bread = BranchBreadOut::where('branch_id','=',$request->branchid)->simplePaginate($limit);
        return response()->json([
            'status' =>$bread
        ]);
    }

     
    //   public function get_bread(Request $request){

    //          $request->validate([
    //             'id'=>['required'],
    //          ]);

    //           $request = InventoryProduction::where('branch_id','=' ,$request->id)
    //           ->select('production_id','production_status','created_at')->distinct()->orderBy('created_at','DESC')->get();

    //            return response()->json([
    //             'status' => $request
    //         ]);

    //  }
    //   public function get_specific_production(Request $request){

    //          $request->validate([
    //             'production_id'=>['required'],
    //          ]);

    //           $request = InventoryProduction::where('production_id' ,$request->production_id)->get();

    //            return response()->json([
    //             'status' => $request
    //         ]);

    //  }
    //   public function update_bread_out(Request $request){

    //          $request->validate([
    //             'data'=>['required'],
    //          ]);

    //         for ($i=0; $i < count($request->data); $i++) { 
    //             InventoryProduction::where('id',  $request->data[$i]['id'])
    //             ->update([
    //               'bread_out' => $request->data[$i]['bread_out'],
    //               'charge_pc' => $request->data[$i]['charge_pc'],
    //               'remaining_pcs' => $request->data[$i]['remaining_pcs'],
    //               'sold_bread' => $request->data[$i]['sold_bread'],
    //               'sales' => $request->data[$i]['sales'],
    //               'production_status' => 'Bread Out',
    //             ]);
    //         }

    //           $inventory = InventoryProduction::where([
    //             ['branch_id','=' ,$request->data[0]['branch_id']],
    //             ['production_id','=',$request->data[0]['production_id']]
    //           ])->get();

    //            return response()->json([
    //             'status' =>  $inventory
    //            ]);

    //  }

     
}
