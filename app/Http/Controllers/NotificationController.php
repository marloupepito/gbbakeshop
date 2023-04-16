<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IngredientsRequest;
use App\Models\InventoryProduction;
class NotificationController extends Controller
{
    public function get_notification(){
        $ingredients = IngredientsRequest::select('branch_id','branch_name','ingredients_status','request_id','notify','created_at')
        ->distinct()
        ->where('notify','=',null)
        ->get();
        $production = InventoryProduction::select('production_id','branch_name','production_status','branch_id','notify','created_at')
        ->where('notify','=',null)
        ->distinct()
        ->get();
         return response()->json([
                'status1' => $ingredients,
                'status2' => $production
            ]);
    }
}
