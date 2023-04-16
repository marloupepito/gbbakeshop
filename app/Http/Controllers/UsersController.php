<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Branches;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function confirm_password(Request $request){
        if(Auth::attempt($request->only('username','password'))){
            return response()->json([
                'status' => 'success',
            ]);
        }else{
            return response()->json([
                'status' => 'error',
            ]);
        }
       
 
    }
public function update_account(Request $request){
     $exist= User::where([['username','=',$request->data['username']],['id','<>',$request->id]])->get();

     if(count($exist) === 0){
        if($request->data['password'] === null){
            User::where('id','=',$request->id)->update([
                'name'=>$request->data['name'],
                'shift'=>$request->data['shift'],
                'username'=>$request->data['username'],
                'mobile'=>$request->data['mobile'],
                'gender'=>$request->data['gender'],
                'position'=>$request->data['position'],
            ]);

            return response()->json([
                'status' =>'success',
            ]);
        }else{

             User::where('id','=',$request->id)->update([
                'name'=>$request->data['name'],
                'shift'=>$request->data['shift'],
                'username'=>$request->data['username'],
                'mobile'=>$request->data['mobile'],
                'password'=>Hash::make($request->data['password']),
                'gender'=>$request->data['gender'],
                'position'=>$request->data['position'],
            ]);


            return response()->json([
                'status' =>'success',
            ]);
        }
     }else{
       return response()->json([
            'status' =>'exist',
        ]);
     }
}
    public function get_every_account(Request $request){
        $user= User::where('id',$request->id)->first();

           return response()->json([
                    'status' =>$user,
                ]);
    }
    public function delete_account(Request $request){

       User::where('id',$request->id)->delete();
                  return response()->json([
                    'status' =>'success',
                ]);
    }
   public function user_login(Request $request){
        $request->validate([
            'username'=>['required'],
            'password'=>['required'],
        ]);

        if(Auth::attempt($request->only('username','password'))){
            
     $branch = Branches::where('id', '=',intval(Auth::user()['branch_id']))->first();
            return response()->json([
                'status' => 'success',
                'user' => Auth::user(),
                'branch' => $branch,
            ]);
        }else{
            return response()->json([
                'status' => 'Incorrect username or password!'
            ]);
        }
        throw ValidationException::withMessages([
            'username' => ['Incorrect username or password!'],
        ]);
        
    }

     public function add_account(Request $request){
   

       $exist = User::where('username','=',$request->data['username'])->get();
        if(count($exist) === 0){
                 User::create([
                    'key' =>  rand(100000,9999999),
                    'branch_id' =>  $request->branchid,
                    'name' =>  $request->data['name'],
                    'gender' => "ww",
                    'mobile' =>  $request->data['mobile'],
                    'username' => $request->data['username'],
                    'password' =>  Hash::make($request->data['password']),
                    'shift' =>  $request->data['shift'],
                    'position' => $request->data['position'],
                ]);  
                 return response()->json([
                    'status' =>'success',
                    'load' =>rand(100000,9999999),
                    'console' =>$request->data['gender']
                ]);
        }else{
               return response()->json([
                    'status' =>'exist' 
                ]);      
        }
  

       
    }
    public function get_all_users(Request $request){
        $users = User::where([['branch_id', '=' ,$request->branchid],['position', '<>' ,'admin']])
        ->get();
        return response()->json([
            'status' => $users
        ]);
    }
    public function logout(){
      Auth::logout();
    }

   
}
