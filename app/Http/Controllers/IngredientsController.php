<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ingredients;
class IngredientsController extends Controller
{
    public function get_all_ingredients(){

        $ingredients = Ingredients::all();
        return response()->json([
            'status' => $ingredients
        ]);
    }

   
}
