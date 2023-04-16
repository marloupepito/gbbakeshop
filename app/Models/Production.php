<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Production extends Model
{
    protected $table = 'production';
    use HasFactory;
    protected $fillable = [
        'random_id',
        'branch_ingredients_id',
        'branch_bread_id',
        'branch_id',
        'bread_name',
        'bind',
        'code_name',
        'ingredients_name',
        'quantity',
        'ingredients_name',
        'production_quantity',
     ];
}
