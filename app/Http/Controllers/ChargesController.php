<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Charges;
class ChargesController extends Controller
{
    public function get_user_charges($id){
        $charge=Charges::where('userid',$id)->get();
        return response()->json([
            'status' =>$charge
        ]);
    }
}
