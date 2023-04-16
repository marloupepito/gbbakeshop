<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Ingredients;
use App\Models\BranchIngredients;
use App\Models\Production;
use App\Models\BranchBread;
use App\Models\Branches;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

    
			$bread = array(
				'ATIS-ATIS(B)',			
				'ATIS-ATIS(M)',
				'BANANA CAKE',
				'BELGIUM',
				'BINANGKAL',
				'BIRTHDAY CAKE',
				'BOHOL',
				'BUKO PIE',
				'BUNS',
				'CHEESE BREAD',
				'CHEESE DSAL',
				'CHIFFON CAKE',
				'CHOCO CUP CAKE',
				'CHOCO FLOWER',
				'CHOCO GERMAN',
				'CHOCO ROLL',
				'CHOCO SQUASH',
				'CHOCOLATE CAKE',
				'CINNAMON',
				'COCO BREAD/PANSO',
				'CORNSTARCH CAKE',
				'CRINKLES - CHOCO',
				'CRINKLES - UBE',
				'CUP CAKE',
				'DELETCHE',
				'DOUGHNUT',
				'EGG BREAD',
				'ELORDE',
				'ENSAIMADA PLAIN (B)',
				'ENSAIMADA PLAIN(S)',
				'ENSAIMADA with chz(B)',
				'ENSAIMONGGO (B)',
				'ENSAIMONGGO (5)',
				'FRANCIS(B)',
				'FRANCIS(M)',
				'GERMAN LOAF',
				'HALF MOON',
				'HOPIA',
				'TALIAN BREAD',
				'MAIS-MAIS',
				'MARBLE CAKE',
				'MAYONNAISE',
				'MONGO BREAD(B)',
				'MONGO BREAD',
				'MUNAY BREAD(B)',
				'MUNAY BREAD(M)',
				'MUSHROOM',
				'HAND BREAD',
				'PANDESAL (B)',
				'PANDESAL (S)',
				'PANDESAL (M)',
				'PAPAYA (B)',
				'PAPAYA (M)',			
				'PINEAPPLE PIE',
				'PINEAPPLE ROLL',
				'RED PIE',
				'SLICE/LOAF BREAD PLAIN',
				'SLICE/LOAF BREAD with chz',
				'SPANISH ROLL',
				'STAR BREAD (B)',
				'SWEETHEART',
				'TIRE BREAD(B)',
				'TORTA',
				'UBE CHEESE',
				'UBE ENGLISH',
				'UBE FLOWER',
				'UBE GERMAN',
				'UBE PIE',
				'UBE ROLL',
				'UBE SQUASH',
				'WHEAT BREAD',
				'YOVO-PANDAN',
				'YOYO-UBE',
				'GRACIOSA',
				'BROWNIES',
				'BUTTER SCOTCH',
				'PUTO CHEESE',
				'PUTO UBE',
				'PUTO PANDAN',
				'PEANUT BUTTER');
			
				for($i=0; $i < 80; $i++){
					$user = new BranchBread;
					$user->branch_id = 1;
					$user->quantity = 200;
					$user->bread_name = $bread[$i];
					$user->price = 4;
					$user->save();
				}
				for($i=0; $i < 80; $i++){
					$user = new BranchBread;
					$user->branch_id = 2;
					$user->quantity = 200;
					$user->bread_name = $bread[$i];
					$user->price = 4;
					$user->save();
				}

				for($i=0; $i < 80; $i++){
					$user = new BranchBread;
					$user->branch_id = 3;
					$user->quantity = 200;
					$user->bread_name = $bread[$i];
					$user->price = 4;
					$user->save();
				}

				for($i=0; $i < 80; $i++){
					$user = new BranchBread;
					$user->branch_id = 4;
					$user->quantity = 200;
					$user->bread_name = $bread[$i];
					$user->price = 4;
					$user->save();
				}

				for($i=0; $i < 80; $i++){
					$user = new BranchBread;
					$user->branch_id = 5;
					$user->quantity = 200;
					$user->bread_name = $bread[$i];
					$user->price = 4;
					$user->save();
				}

				for($i=0; $i < 80; $i++){
					$user = new BranchBread;
					$user->branch_id = 6;
					$user->quantity = 200;
					$user->bread_name = $bread[$i];
					$user->price = 4;
					$user->save();
				}


     	    $user = new User;
	        $user->branch_id = 'admin';
	        $user->name = 'admin';
	        $user->position = 'admin';
	        $user->username = 'admin';
	        $user->password = Hash::make('admin');
	 		$user->status = 'active';
	 		$user->year = date('Y');
	        $user->save();


	        $branchName = ['Endrina Brgy-5','DC Cruz Brgy-1','Biron Brgy-2','Espada Brgy-3','Urban highway'];

	             for ($i=0; $i < 4; $i++) { 
		        	$user = new Branches;
		        	$user->key = rand(10000,1000000);
			        $user->branch_name = $branchName[$i];
			        $user->save();
		        }


        // for ($i=0; $i < 4; $i++) { 
        // 	$user = new User;
		// 	$user->key = rand(10000,1000000);
	    //     $user->branch_name = $branchName[$i];
	    //     $user->branch_assigned_person = 'person '.$i;
	    //     $user->branch_position = 'personnel';
	    //     $user->username = 'personnel'.$i;
	    //     $user->password = Hash::make('admin');
	 	// 	$user->status = 'active';
	 	// 	$user->year = date('Y');
	    //     $user->save();
        // }

		$ing = 			
		array('Gold Star',
		'Sun Moon Star',
		'All Purpose',
		'Brown Sugar',
		'Refined Sugar',
		'Refined Salt',
		'Mongoes',
		'Cocoa',
		'Cornstarch',
		'Alaska Evap',
		'Bambie Oil',
		'Alpha Oil',
		'Baking Cap 30z' ,
		'Cheese Magnolia',
		'Maurepan Yeast',
		'Neco Egg Yellow',
		'Neco Choco Brown',
		'Neco Ube Violet' ,
		'Old News',
		'Peotraco',
		'Peneapple Crushed',
		'Springkles',
		'Ube Powder',
		'Vanilla',
		'BOS Bambie Pail',
		'Lecinta',
		'Dobrem',
		'Lunga White',
		'Glassine',
		'Cake Flour',
		'Frosty Wip Cream',
		'Baker Gel',
		'Puyo #2',
		'Puyo #4',
		'Puyo #6',
		'Puyo #8',
		'Puyo #16',
		'Lard',
		'Margarine',
		'Dairy Bake',
		'Maurepan Yeast B.O',
		'Triple a Baking Powder',
		'Baking Calumet',
		'Ultra Soft',
		'Plantza',
		'Drinking Straw',
		'1st General Poly',
		'Dairy Milk Butter Milk',
		'Doreen Condense Small',
		'Spring Lard',
		'Spring Margarine',
		'4x12 Texas',
		'8x12 Roll Bag',
		'Bumbee Tiny Plain' ,
		'Bumbee Medium Plain',
		'Bumbee Large Plain',
		'3rd Island Poly',
		'HPCO RAW',
		'VMC Refined',
		'M.C Refined',
		'Green Monggo',
		'Eco Bag Medium',
		'Eco Bag Large',
		'BOB',
		'BC Baking Powder Green',
		'BC Baking Poweder Red',
		'Ola Oil',
		'Anti Amag');

		//$bind = ['Sako','Baro','Tray','Kilo','Grams','Pcs'];

		for ($i=0; $i < 1; $i++) { 
			//$randBind = $bind[array_rand($bind)];
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 1;
	        $ingredients->ingredients_name = 'Flour';
			$ingredients->ingredients_quantity = 100;
			$ingredients->bind_name = 'Kilo';
			$ingredients->notify = 30;
	        $ingredients->save(); 
		}

		for ($i=0; $i < 1; $i++) { 
			//$randBind = $bind[array_rand($bind)];
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 2;
	        $ingredients->ingredients_name = 'Flour';
			$ingredients->ingredients_quantity = 100;
			$ingredients->bind_name = 'Kilo';
			$ingredients->notify = 30;
	        $ingredients->save(); 
		}

		for ($i=0; $i < 1; $i++) { 
			//$randBind = $bind[array_rand($bind)];
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 3;
	        $ingredients->ingredients_name = 'Flour';
			$ingredients->ingredients_quantity = 100;
			$ingredients->bind_name = 'Kilo';
			$ingredients->notify = 30;
	        $ingredients->save(); 
		}

		for ($i=0; $i < 1; $i++) { 
			//$randBind = $bind[array_rand($bind)];
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 4;
	        $ingredients->ingredients_name = 'Flour';
			$ingredients->ingredients_quantity = 100;
			$ingredients->bind_name = 'Kilo';
			$ingredients->notify = 30;
	        $ingredients->save(); 
		}

		for ($i=0; $i < 1; $i++) { 
			//$randBind = $bind[array_rand($bind)];
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 5;
	        $ingredients->ingredients_name = 'Flour';
			$ingredients->ingredients_quantity = 100;
			$ingredients->bind_name = 'Kilo';
			$ingredients->notify = 30;
	        $ingredients->save(); 
		}

		for ($i=0; $i < 1; $i++) { 
			//$randBind = $bind[array_rand($bind)];
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 6;
	        $ingredients->ingredients_name = 'Flour';
			$ingredients->ingredients_quantity = 100;
			$ingredients->bind_name = 'Kilo';
			$ingredients->notify = 30;
	        $ingredients->save(); 
		}
	}
		
}
