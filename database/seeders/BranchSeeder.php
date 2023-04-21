<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Branches;
class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $branchName = ['SCC Biron Brgy 2','SCC DC Cruz Brgy 1','SCC Aranita Brgy 3','SCC Endrina Brgy 5','SCC Urban highway','Calatrava 1','Calatrava 2',
    'Toboso 1','Toboso 2', 'Escalante 1', 'Escalante 2','Sagay 1','Cadiz 1','Victorias 1','Victorias 2','Talisay 1','Silay 1','Silay 2',
'Silay 3','Bacolod Brgy Bata','Bacolod Akisiola Village', 'Bacolod Mansilingan','Bacolod Murcia','Lacarlota 1','Lacarlota 2','Pontavedra 1',
'Ma-oa','Brgy Suay','Himamaylan','Kabangkalan 1','Kabangkalan 2','Binalbagan 1','Binalbagan 2','EB Magallona','Isabela 1','Isabela 2','Vallehermoso Brgy Tagbino',
'Guihulngan City'];

        for ($i=0; $i < count($branchName); $i++) { 
           $user = new Branches;
           $user->key = rand(10000,1000000);
           $user->branch_name = $branchName[$i];
           $user->save();
       }
    }
}
