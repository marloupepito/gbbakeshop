<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BranchIngredients;
use App\Models\User;
use App\Models\Branches;

class BranchIngredientsController extends Controller
{

    
    public function delete_branch_ingredients(Request $request){
        BranchIngredients::where('id','=',$request->id)->delete();
    }
    public function get_branch_ingredients(Request $request){
        $branch =Branches::where('branch_name','=',$request->branchName)->first();
        $ingredients = BranchIngredients::where('branch_id','=',$branch->id)->orderBy('ingredients_quantity', 'ASC')->get();
         return response()->json([
             'status' => $ingredients
         ]);
     }

     public function get_every_ingredients(Request $request){

        $ingredients = BranchIngredients::where('id', $request->id)->get();
        return response()->json([
            'status' => $ingredients
        ]);
    }

    public function make_branch_ingredients(Request $request){

        $branchid = $request->branchid;
        $ingredients = new BranchIngredients;
        $ingredients->branch_id = $branchid;
        $ingredients->ingredients_name = $request->data['product'];
        $ingredients->ingredients_quantity = $request->data['quantity'];
        $ingredients->bind_name = $request->data['bundle'];
        $ingredients->notify = $request->data['notification'];
        $ingredients->save();
         
        $ingredients->save();
        return response()->json([
            'status' => $request->data
        ]);
    }


    
}
