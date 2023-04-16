<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expenses;
use App\Models\Images;
use App\Models\Records;
use Illuminate\Support\Facades\Storage;
class ExpensesController extends Controller
{

    
    public function get_branch_dashboard($id,$periodical){
        $records=Records::where([['branch_id','=',$id],['remember_token','=','done']])
        ->get();
        return response()->json([
            'status' =>$records
        ]);
    }
    public function get_branch_expenses($id,$date){
     $expenses=Expenses::where([['branchid','=',$id],['date','=',$date]])->get();

        return response()->json([
            'status' =>$expenses
        ]);
    }
    public function add_branch_expenses(Request $request){
        
       
        $path='/images/receipts/';
       
        $imageRandom = rand(1,999999999);
       for ($i=0; $i < $request->length; $i++) { 
        $images = Storage::putFile('public/receipts', $request->file('images'.$i));
        Images::create([
            'branchid' =>  $request->branchid,
            'userid' =>  $request->userid,
            'from' =>  $imageRandom,
            'images' =>  $images,
            'date' =>  $request->date,
        ]);
       }
         Expenses::create([
            'branchid' =>  $request->branchid,
            'userid' =>  $request->userid,
            'name' =>  $request->name,
            'description' => $request->description,
            'amount' => $request->amount,
            'images' =>$imageRandom,
            'date' =>$request->date,
        ]);
        return response()->json([
            'status' => 'success'
        ]);
    }
}
