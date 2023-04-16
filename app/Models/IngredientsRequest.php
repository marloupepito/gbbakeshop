<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientsRequest extends Model
{
    protected $primaryKey = 'key';
    protected $table = 'ingredients_request';
    use HasFactory;
     protected $fillable = [
      'branch_id',
      'request_id',
      'ingredients_name',
      'ingredients_quantity',
      'ingredients_bind',
      'ingredients_status',
      'notify',
     ];
}
