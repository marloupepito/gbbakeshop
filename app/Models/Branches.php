<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branches extends Model
{
    use HasFactory;
    protected $primaryKey = 'key';
    protected $table = 'branches';
      protected $fillable = [
        'branch_name',
     ];
}
