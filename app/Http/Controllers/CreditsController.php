<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Credits;
use App\Models\Charges;
class CreditsController extends Controller
{
    
    
    public function get_record_dates($id){
        $credits = Credits::where('branch_id',$id)->get();
        $charges = Charges::where('branch_id',$id)->get();
        return response()->json([
            'status1' =>$credits,
            'status2' =>$charges
        ]);
    }
    public function create_credit_or_charge(Request $request){
        if($request->type === 'Charge'){
            Charges::create($request->validate([
                'name' => 'required',
                'description' => 'required',
                'amount' => 'required',
                'branch_id' => 'required',
                'date' => 'required',
                'userid' => 'required'
            ]));
        }else{
            Credits::create($request->validate([
                'name' => 'required',
                'description' => 'required',
                'amount' => 'required',
                'branch_id' => 'required',
                'date' => 'required',
                'userid' => 'required'
            ]));
        }
    }
    public function get_user_credits($id){
        $charge=Credits::where('userid',$id)->get();
        return response()->json([
            'status' =>$charge
        ]);
    }
}
