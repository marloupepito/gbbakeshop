<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BranchBread;
use App\Models\BranchIngredients;
use App\Models\BranchBreadSold;
use App\Models\BranchBreadOut;
use App\Models\Records;
use App\Models\Production;
class BranchBreadController extends Controller
{

    

    public function delete_production_code(Request $request){
        Production::where('random_id','=',$request->id)->delete();
    }
    public function get_bread_every_branch(Request $request){

// ['date','=',date("F d, Y A")],
        $limit = ($request->current * $request->pageSize) +1;
        $ingredients = Records::where([['status','=',$request->status],['remember_token','=',null],['branch_id','=',$request->branchid]])->orderBy('key', 'ASC')->simplePaginate($limit);
        return response()->json([
            'status' => $ingredients
        ]);
    }
    public function get_bread_every_branch2(Request $request){

        $ingredients = BranchBread::where('branch_id', $request->branchid)->get();
        return response()->json([
            'status' => $ingredients
        ]);
    }
    public function add_bread_branch_sold(Request $request){

        $branchid = $request->branchid;

        $getBread = Records::where([['branch_id','=', $branchid],['key','=',$request->breadid]])->first();
       
       // $breadout=$getBread->beginning - $request->breadout;
       // $charge=$getBread->production - $request->charge;
       // $date = date("A") === "AM"?date("F d, Y").' '.'PM':date("F d, Y",strtotime ('+1 day')).' '.'AM';
       // $date= date("F d, Y A");
        
              $records = new Records;
              $records->branch_id = $branchid;
              $records->bread_id = $getBread->bread_id;
              $records->bread_name =$getBread->bread_name;
              $records->beginning = $request->remaining;
              $records->price = $getBread->price;
              $records->total = $request->remaining;
              $records->date = $request->date;
              $records->save();


              $alltotal =$getBread->total;
              $breadout = $request->breadout;
              $breadTotalRemaining= $alltotal-$breadout;
              $remaining =  $request->remaining;
              $soldout =  $breadTotalRemaining - $remaining;


         Records::where([['branch_id', $branchid],['key', $request->breadid]])
          ->update([
            'breadout' => $breadout,
           // 'charge' => $request->charge,
            'remaining' =>$remaining,
            'soldout' =>$soldout,
            'assigned2' =>$request->assigned,
            'remark3' =>$request->remarks,
            'sales' =>$getBread->price * $soldout,
            'date' =>$request->date,
            'remember_token' =>'done',
        ]);
          

        return response()->json([
            'status' => $getBread
        ]);

    }
    public function add_bread_branch_out(Request $request){


        $branchid = $request->branchid;

        $getBread = BranchBread::where([['branch_id','=', $branchid],['key','=',$request->breadid]])->first();
        $total = $getBread->quantity - $request->breadout;

         BranchBread::where([['branch_id', $branchid],['key', $request->breadid]])
          ->update(['quantity' => $total]);

            $ingredients = new BranchBreadOut;
            $ingredients->branch_id = $branchid;
            $ingredients->bread_name = $getBread->bread_name;
            $ingredients->quantity = $request->breadout;
            $ingredients->price = $getBread->price;
            $ingredients->save();

        return response()->json([
            'status' => $getBread->quantity
        ]);

    }
    
}
