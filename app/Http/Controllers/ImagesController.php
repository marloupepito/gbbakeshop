<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Images;
class ImagesController extends Controller
{
    public function get_branch_images($id,$date,$imageid){
        $images=Images::where([['branchid','=',$id],['date','=',$date],['from','=',$imageid]])->get();
        return response()->json([
            'status' =>$images
        ]);
    }
}
