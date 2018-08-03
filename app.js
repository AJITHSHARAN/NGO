var express=require("express");
app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var mongoose=require("mongoose");
mongoose.connect("mongodb://ngo:Lak1776*@ds113122.mlab.com:13122/ngo");

var ngoschema=new mongoose.Schema({
  name:String,
  state1:String,
  regno:String,
  city:String,
  address:String,
    sectors:String
  });
  var ngo=mongoose.model("ngo",ngoschema);
  // ngo.create(
  // {
  //   name:"AdityaNatyaAcademy",
  //   state1:"Andaman & Nicobar Islands",
  //   regno:"888",
  //   city:"Port Blair" ,
  //   address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
  //     sectors:"Data Not Found"
  // },function(err,ngo)
  // {
  //   if(err)
  //   {
  //     console.log(err);
  //   }
  //   else
  //     {
  //       console.log(ngo);
  //     }
  //   });
  //   ngo.create(
  //   {
  //     name:"AdityaNatyaAcademy",
  //     state1:"Andaman & Nicobar Islands",
  //     regno:"888",
  //     city:"Port Blair" ,
  //     address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
  //       sectors:"Data Not Found"
  //   },function(err,ngo)
  //   {
  //     if(err)
  //     {
  //       console.log(err);
  //     }
  //     else
  //       {
  //         console.log(ngo);
  //       }
  //     });
  //     ngo.create(
  //     {
  //       name:"AdityaNatyaAcademy",
  //       state1:"Andaman & Nicobar Islands",
  //       regno:"888",
  //       city:"Port Blair" ,
  //       address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
  //         sectors:"Data Not Found"
  //     },function(err,ngo)
  //     {
  //       if(err)
  //       {
  //         console.log(err);
  //       }
  //       else
  //         {
  //           console.log(ngo);
  //         }
  //       });
  //       ngo.create(
  //       {
  //         name:"AdityaNatyaAcademy",
  //         state1:"Andaman & Nicobar Islands",
  //         regno:"888",
  //         city:"Port Blair" ,
  //         address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
  //           sectors:"Data Not Found"
  //       },function(err,ngo)
  //       {
  //         if(err)
  //         {
  //           console.log(err);
  //         }
  //         else
  //           {
  //             console.log(ngo);
  //           }
  //         });
  //         ngo.create(
  //         {
  //           name:"AdityaNatyaAcademy",
  //           state1:"Andaman & Nicobar Islands",
  //           regno:"888",
  //           city:"Port Blair" ,
  //           address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
  //             sectors:"Data Not Found"
  //         },function(err,ngo)
  //         {
  //           if(err)
  //           {
  //             console.log(err);
  //           }
  //           else
  //             {
  //               console.log(ngo);
  //             }
  //           });
  //           ngo.create(
  //           {
  //             name:"AdityaNatyaAcademy",
  //             state1:"Andaman & Nicobar Islands",
  //             regno:"888",
  //             city:"Port Blair" ,
  //             address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
  //               sectors:"Data Not Found"
  //           },function(err,ngo)
  //           {
  //             if(err)
  //             {
  //               console.log(err);
  //             }
  //             else
  //               {
  //                 console.log(ngo);
  //               }
  //             });
  //             ngo.create(
  //             {
  //               name:"AdityaNatyaAcademy",
  //               state1:"Andaman & Nicobar Islands",
  //               regno:"888",
  //               city:"Port Blair" ,
  //               address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
  //                 sectors:"Data Not Found"
  //             },function(err,ngo)
  //             {
  //               if(err)
  //               {
  //                 console.log(err);
  //               }
  //               else
  //                 {
  //                   console.log(ngo);
  //                 }
  //               });
  //               ngo.create(
  //               {
  //                 name:"AdityaNatyaAcademy",
  //                 state1:"Andaman & Nicobar Islands",
  //                 regno:"888",
  //                 city:"Port Blair" ,
  //                 address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
  //                   sectors:"Data Not Found"
  //               },function(err,ngo)
  //               {
  //                 if(err)
  //                 {
  //                   console.log(err);
  //                 }
  //                 else
  //                   {
  //                     console.log(ngo);
  //                   }
  //                 });
app.get("/",function(req,res)
{
  res.render("home.ejs");
});
app.get("/search",function(req,res)
{
  res.render("home.ejs");
});
app.get("/",function(req,res)
{
  res.render("home.ejs");
});
app.listen(3000);
