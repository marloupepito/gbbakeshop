<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BranchIngredients;

class BranchIngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          
			$rowMaterialsKilo=['NEY','NCB','NUB','SPRINKLES','00MY','00UP','FROSTY WHIP CREAM','BAKER GEL','00PANADERO V.','00V','PETRACO'
            ,'PINEAPPLE CRUSHED','00CF','MAGNOLLIA CHEESE','00C','00CS','007G','GB BLIND','0010J','GB EMPROVER','00ALP','008H','Monggo',
        '005E','LUNGA','SHORTENING','MARGARINE','oil B','003C','0015k','ALASKA EVA 305g/can','00B','Gold Star (3rd)','Sun Moon Star (1st)','00ws',
    ];
    
        $rowMaterialsPcs=['DRINGKING STRAW','GLASSINE','4X12 ICE BAG','8X12 ROLL BAG','TINY PLASTIC','MEDIUM PLASTIC','LARGE PLASTIC','ECO BAG MEDIUM',
    'ECO BAG LARGE','PUYO #4','PUYO #2','PUYO #6','PUYO #8','PUYO #16','BAKING CUPCAKE 3oz','001','00BS','BAKING CUPCAKE 3oz','Flour','H2O'];
    
    
            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 1;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 1;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
    
    
    
    
            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 2;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 2;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
    
    
            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 3;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 3;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
    
    
            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 4;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 4;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 5;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 5;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }



            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 6;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 6;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }



            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 7;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 7;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 8;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 8;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 9;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 9;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 10;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 10;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 11;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 11;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }



            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 12;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 12;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 13;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 13;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 14;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 14;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 15;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 15;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 16;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 16;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }

            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 17;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 17;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 18;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 18;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }

            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 19;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 19;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }



            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 19;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 19;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 20;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 20;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }

            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 21;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 21;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 22;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 22;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 23;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 23;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 24;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 24;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 25;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 25;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 26;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 26;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }

            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 27;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 27;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 28;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 28;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }

            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 29;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 29;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 30;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 30;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 31;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 31;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }

            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 32;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 32;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }

            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 33;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 33;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 34;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 34;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 35;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 35;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }

            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 36;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 36;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 37;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 37;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }


            for ($i=0; $i < count($rowMaterialsKilo); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 38;
                $ingredients->ingredients_name = $rowMaterialsKilo[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Kilo';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
            for ($i=0; $i < count($rowMaterialsPcs); $i++) { 
                $ingredients = new BranchIngredients;
                $ingredients->branch_id = 38;
                $ingredients->ingredients_name = $rowMaterialsPcs[$i];
                $ingredients->ingredients_quantity = 100;
                $ingredients->bind_name = 'Pcs';
                $ingredients->notify = 30;
                $ingredients->save(); 
            }
    }
}
