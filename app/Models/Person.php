<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;



    public function Aliases(){
        return $this->belongsToMany(Person::class);
    
}
public function Images(){
    return $this->belongsTo(Person::class);
}

public function statuses()
{
    return $this->belongsTo(Status::class);
}

}

