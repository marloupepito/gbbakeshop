<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredients extends Model
{
    protected $table = 'ingredients';
    use HasFactory;
     protected $fillable = [
        'ingredients_name',
        'ingredients_quantity',
        'ingredients_quantity_description'
     ];
}
