<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Records extends Model
{
       use HasFactory;
     protected $primaryKey = 'key';
     protected $table = 'records';
     protected $fillable = [
       'key',
       'branch_id',
       'baker_id',
        'bread_id',
        'bread_name',
        'beginning',
        'production',
        'target',
        'kilo',
        'price',
        'total',
        'breadout',
        'charge',
        'overs',
        'remaining',
        'soldout',
        'remark1',
        'remark2',
        'remark3',
        'remark4',
        'baker',
        'assigned1',
        'assigned2',
        'assigned3',
        'status',
        'sales',
        'date',
        'date2'
     ];
}
