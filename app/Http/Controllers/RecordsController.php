<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Records;
use App\Models\Charges;
use App\Models\Credits;
class RecordsController extends Controller
{
    public function my_account_production($id){
       $records = Records::where('baker_id','=',$id)->limit(30)->get();
       return response()->json([
            'status' => $records,
        ]);
    }
    public function get_branch_charges($date,$branchid){
        $records1 = Charges::where([['date','=',$date],['branch_id','=',$branchid]])->orderBy('created_at', 'DESC')->get();
        $records2 = Credits::where([['date','=',$date],['branch_id','=',$branchid]])->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status1' => $records1,
            'status2' => $records2,
        ]);
    }
    public function get_user_charge(Request $request){
        $records = Records::where([['charge','<>',0],['date','=',$request->date],['baker_id','=',$request->userid],['branch_id','=',$request->branchid]])->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => $records,
        ]);
    }
    public function get_all_records(Request $request){
        $records = Records::where([['branch_id','=',$request->id],['remember_token','=','done']])->orderBy('created_at', 'DESC')->get()->unique('date');
        return response()->json([
            'status' => $records,
        ]);
    }
    public function get_branch_record(Request $request){

       $result = Records::where([['remember_token','=','done'],['date','=',$request->date],['branch_id','=',$request->branchid]])
       ->orderBy('key','ASC')->get();
          return response()->json([
              'status' => $result,
          ]);
    }
}
