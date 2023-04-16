<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branches;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class BranchController extends Controller
{
  public function get_all_branch(){
       $users = Branches::all();
        return response()->json([
            'status' => $users
        ]);
    }

     public function get_branch_id(Request $request){
         $request->validate([
            'branch'=>['required'],
        ]);
       $branch = Branches::where('branch_name', '=',$request->branch)->first();
        return response()->json([
            'status' => $branch
        ]);
    }

    public function add_branch(Request $request){

        $ingredients = new Branches;
        $ingredients->key = rand(10000,1000000);
        $ingredients->branch_name = $request->branchName;
        $ingredients->save();
       return response()->json([
           'status' => 'success'
       ]);
   }

   public function delete_branch(Request $request){

    Branches::where('id',$request->id)->delete();
    return response()->json([
        'status' => 'success'
    ]);
}

   
}
