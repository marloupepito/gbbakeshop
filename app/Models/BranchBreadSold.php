<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BranchBreadSold extends Model
{
   protected $primaryKey = 'key';
    protected $table = 'branch_bread_sold';
    use HasFactory;
     protected $fillable = [
        'branch_id',
        'bread_name',
        'quantity',
        'price',
     ];
}
