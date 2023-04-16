<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expenses extends Model
{
    use HasFactory;
    protected $table = 'expenses';
    protected $fillable = [
        'branchid',
        'userid',
        'name',
        'description',
        'images',
        'amount',
        'date'
     ];
}
