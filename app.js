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
//   ngo.create(
// {
//   name:"BARRACKPORE DIOCESAN BOARD OF SOCIAL SERVICES",
//   	regno:"S/1L/27538 OF 2004-2005",
//     city:"BARRACKPORE",
//     state1:"WEST BENGAL",
//     address:"86, MIDDLE ROAD, BARRACKPORE",
//     sectors:"Education & Literacy,Health & Family Welfare,Nutrition,Aged/Elderly"
//
// },function(err,ngo)
//   {
//      if(err)
//      {
//        console.log(err);
//      }
//      else
//        {
//          console.log(ngo);
//        }
//      });
//      ngo.create(
//    {
//      name:"ST PETERS VOCATIONAL TRAINING CENTRE",
// regno:"S/2L/41116 OF 2015-2016",
// city:"KOLKATA",
// state1:"WEST BENGAL",
// address:"KULPI ROAD, P.O AND P.S BARUIPUR",
// sectors:"Education & Literacy"
//
//    },function(err,ngo)
//      {
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
//       {
//         name:"Institute of Computer Literacy and Training",
//   regno:"IV - 150100208 / 2016",
//   city:"Badkulla",
//   state1:"WEST BENGAL",
//   address:"SH 11, Hospital More, P.O.Badkulla , DistNadiaStateWest Bengal, Pin741121",
//   sectors:"Education & Literacy"
//
//       },function(err,ngo)
//         {
//            if(err)
//            {
//              console.log(err);
//            }
//            else
//              {
//                console.log(ngo);
//              }
//            });
//            ngo.create(
//          {
//            name:"RAHARA PASCHIMPARA SOCIAL CULTURAL ATHLETIC ASSOCIATION",
//  regno:"S/99626",
//  city:"KHARDAH",
//  state1:"WEST BENGAL",
//  address:"RAHARA , PASCHIMPARA , POST RAHARA , KOLKATA700118",
//  sectors:"Housing"
//
//          },function(err,ngo)
//            {
//               if(err)
//               {
//                 console.log(err);
//               }
//               else
//                 {
//                   console.log(ngo);
//                 }
//               });
//
//               ngo.create(
//             {
//               name:"10 D EDUCATIONAL DEVELOPMENT TRUST",
// regno:"IV-01541/13",
// city:"JOYNAGAR",
// state1:"(WEST BENGAL)",
// address:"257, N.S.B ROADPO- JOYNAGAR MAJILPURPS- JOYNAGAR",
// sectors:"Education & Literacy"
//             },function(err,ngo)
//               {
//                  if(err)
//                  {
//                    console.log(err);
//                  }
//                  else
//                    {
//                      console.log(ngo);
//                    }
//                  });
//
//                  ngo.create(
//                {
//                  name:"MILE AMRA SEBAK SANGHA",
// regno:"S/2L/No.-43489 of 2015-2016",
// city:"BERHAMPORE",
// state1:"(WEST BENGAL)",
// address:"VILL14 MILE (TIKOR) POKALADANGA PSDAULATABD",
// sectors:"Animal Husbandry, Dairying & Fisheries,Art & Culture,Children,Civic Issues,Disaster Management,Drinking Water,Education & Literacy,Aged/Elderly,Environment & Forests,Health & Family Welfare,HIV/AIDS,Housing,Human Rights,Micro Finance (SHGs),Minority Issues,Rural Development & Poverty Alleviation,Science & Technology,Sports,Tribal Affairs,Vocational Training,Water Resources,Women's Development & Empowerment,Youth Affairs,Land Resources,Panchayati Raj",
//
//                },function(err,ngo)
//                  {
//                     if(err)
//                     {
//                       console.log(err);
//                     }
//                     else
//                       {
//                         console.log(ngo);
//                       }
//                     });
//
//                     ngo.create(
//                   {
//                     name:"6TH SENSE WELFARE SOCIETY",
//                     regno:"S/IL/85744",
//                     city:"BERHAMPORE",
//                     state1:"(WEST BENGAL)",
//                     address:"130, NETAJI ROAD, P.OKHAGRA",
//                     sectors:"Health & Family Welfare"
//                   },function(err,ngo)
//               {
//                        if(err)
//                        {
//                          console.log(err);
//                        }
//                        else
//                          {
//                            console.log(ngo);
//                          }
//                        });

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
app.get("/find",function(req,res)
{
  res.render("search.ejs");
});
app.get("/searchbyname",function(req,res)
{
  if(req.query.name)
  {
    const regex = new RegExp(escapeRegExp(req.query.name), 'gi');
    console.log(regex);
    ngo.find({ "name": regex }, function(err, foundngo) {
           if(err) {
             console.log("not found");
             res.render("search.ejs");
               console.log(err);

           } else {
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
       });
  }
});
app.get("/searchbycity",function(req,res)
{
  if(req.query.city)
  {
    const regex = new RegExp(escapeRegExp(req.query.city), 'gi');
    console.log(regex);
    ngo.find({ "city": regex }, function(err, foundngo) {
           if(err) {
             console.log("not found");
             res.render("search.ejs");
               console.log(err);

           } else {
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
       });
  }
});
app.get("/searchbyreg",function(req,res)
{
  if(req.query.reg)
  {
    const regex = new RegExp(escapeRegExp(req.query.reg), 'gi');
    console.log(regex);
    ngo.find({ "regno": regex }, function(err, foundngo) {
           if(err) {
             console.log("not found");
             res.render("search.ejs");
               console.log(err);

           } else {
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
       });
  }
});
app.get("/searchbysector",function(req,res)
{
  if(req.query.sector)
  {
    const regex = new RegExp(escapeRegExp(req.query.sector), 'gi');
    console.log(regex);
    ngo.find({ "sectors": regex }, function(err, foundngo) {
           if(err) {
             console.log("not found");
             res.render("search.ejs");
               console.log(err);

           } else {
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
       });
  }
});
app.get("/searchbystate",function(req,res)
{
  if(req.query.state)
  {
    const regex = new RegExp(escapeRegExp(req.query.state), 'gi');
    console.log(regex);
    ngo.find({ "state1": regex }, function(err, foundngo) {
           if(err) {
             console.log("not found");
             res.render("search.ejs");
               console.log(err);

           } else {
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
       });
  }
});
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
app.listen(process.env.PORT || 3000);
