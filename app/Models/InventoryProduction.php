<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InventoryProduction extends Model
{
      protected $table = 'inventory_production';
    use HasFactory;
    protected $fillable = [
      'branch_id',
      'branch_name',
      'production_id',
      'bread_name',
      'quantity',
      'price',
      'total',
     ];
}
