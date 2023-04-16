<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BranchIngredients extends Model
{
    use HasFactory;
    protected $table = 'branch_ingredients';
    protected $fillable = [
        'branch_id',
        'ingredients_name',
        'ingredients_quantity',
        'bind_name',
        'notify'
     ];
}
