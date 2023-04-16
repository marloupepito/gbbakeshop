<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BranchBread extends Model
{
    protected $table = 'branch_bread';
    protected $primaryKey = 'key';
    use HasFactory;
     protected $fillable = [
        'branch_id',
        'bread_name',
        'quantity',
        'price',
     ];
}
