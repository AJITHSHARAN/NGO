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
//     {
//       name:"AADIMJATI KHAOKLUK SAMAJ SEBA PAMANG MAHARAJ SOCIETY",
//       regno:"6835",
//       city:"KOWAIFANG",
//       state1:" (TRIPURA)",
//       address:"Kowaifang, P.O.: Kowaifang, P.S.: Baikhora,Santir Bazar, Dist.: South Tripura. PIN-799141",
//       sectors:"Data Not Found"
//
//
//
//     },function(err,ngo)
//       {
//          if(err)
//          {
//            console.log(err);
//          }
//          else
//            {
//              console.log(ngo);
//            }
//          });
//
//
//   ngo.create(
//     {
//       name:"Abalamban",
//       regno:"1500",
//       city:"Agartala",
//       state1:"(TRIPURA)",
//       address:"Abalamban, Airport Road, Barjala(Near TRTC Workshop), Agartala,Tripura,Pin-799002",
//       sectors:"Environment & Forests,Vocational Training,Women's Development & Empowerment"
//
//     },function(err,ngo)
//       {
//          if(err)
//          {
//            console.log(err);
//          }
//          else
//            {
//              console.log(ngo);
//            }
//          });
//
// ngo.create(
// {
//   name:"ABHEL HODA KALYAN SAMITY",
//   regno:"5551",
//   city:"Amarpur",
//   state1:" (TRIPURA)",
//   address:"Taidu Bari",
//   sectors:"Agriculture,Animal Husbandry, Dairying & Fisheries,Art & Culture,Children,Civic Issues,Differently Abled,Environment & Forests,Health & Family Welfare,Legal Awareness & Aid,Micro Finance (SHGs),Minority Issues,Sports,Tribal Affairs,Vocational Training,Water Resources,Women's Development & Empowerment,Youth Affairs"
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
//
// ngo.create(
//   {
//     name:"ADARSHA SANGHA",
//     regno:"3196",
//     city:"DHARMANAGAR",
//     state1:"(TRIPURA)",
//     address:"VILL-DEWANPASHA, PO-DEWANPASHA, PS-DHARMANAGAR",
//     sectors:"Animal Husbandry, Dairying & Fisheries,Agriculture,Art & Culture,Children,Disaster Management,Drinking Water,Education & Literacy,Environment & Forests,Food Processing,Health & Family Welfare,HIV/AIDS,Information & Communication Technology,Legal Awareness & Aid,Labour & Employment,Micro Finance (SHGs),Micro Small  & Medium Enterprises,New & Renewable Energy,Panchayati Raj,Rural Development & Poverty Alleviation,Science & Technology,Sports,Tribal Affairs,Urban Development & Poverty Alleviation,Vocational Training,Women's Development & Empowerment"
//
//   },function(err,ngo)
//     {
//        if(err)
//        {
//          console.log(err);
//        }
//        else
//          {
//            console.log(ngo);
//          }
//        });
//
//   ngo.create(
//     {
//       name:"Abhoy Mission",
//       regno:"1947 under 1860 Socities Act",
//       City:"Agartala",
//       state1:"(TRIPURA)",
//       address:"Abhoy Mission, Ramnagar Road No. 1, P.O- Ramnagar, Agartala, Tripura - 799002.",
//       sectors:"Children,Differently Abled,Education & Literacy,Aged/Elderly,Vocational Training,Women's Development & Empowerment"
//
//     },function(err,ngo)
//       {
//          if(err)
//          {
//            console.log(err);
//          }
//          else
//            {
//              console.log(ngo);
//            }
//          });


//       {
//         name:"AANRKAPORKAM(M)",
//         regno:"/263/D/170",
//         city:"Guwahati",
//          state1:"(ASSAM)",
//          address:"AANRKAPOR C/O: Dhiraj Kumar S/O ; Arjun Ch. Kumar P.OVill: Gotanagar PNGB Road House No: 4 Near Gotanagar Nursery Guwahati-781011",
//          sectors:"Art & Culture,Any Other,Children"
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
//
//       ngo.create(
//         {
//           name:"Aaranyak",
//           regno:"3096 of 1989-90",
//           city:"Guwahati",
//           state1:"(ASSAM)",
//           address:"50 Samannoy Path,Beltola Survey,Guwahati-781028 Assam",
//           sectors:"Animal Husbandry, Dairying & Fisheries,Biotechnology,Disaster Management,Education & Literacy,Environment & Forests,Food Processing,Legal Awareness & Aid,Rural Development & Poverty Alleviation,Scientific & Industrial Research,Tribal Affairs,Water Resources"
//
//         },function(err,ngo)
//           {
//              if(err)
//              {
//                console.log(err);
//              }
//              else
//                {
//                  console.log(ngo);
//                }
//              });
//
//         ngo.create(
//           {
//             name:"Aasha (A Hope) Foundation & Social Welfare Society",
//             regno:"/263/O/448 of 2016-17",
//             city:"Guwahati",
//             state1:"(ASSAM)",
//             address:"c/oBenzir Arfan, House no. 98, 2nd floor, Panbazar, Danish Road, Lakhtokia, Guwahati. Assam. pin 781001.",
//             sectors:"India	Any Other"
//
//           },function(err,ngo)
//             {
//                if(err)
//                {
//                  console.log(err);
//                }
//                else
//                  {
//                    console.log(ngo);
//                  }
//                });
//
// ngo.create(
//   {
//     name:"Aashaa Bora Foundation",
//     regno:"2046",
//     city:"Guwahati",
//     state1:"(ASSAM)",
//     address:"345, NikitaComplex, 1st floor, Khanapara, Guwahati-781022",
//     sectors:"Data Not Found"
//
//   },function(err,ngo)
//     {
//        if(err)
//        {
//          console.log(err);
//        }
//        else
//          {
//            console.log(ngo);
//          }
//        });
//
//   ngo.create(
//     {
//       name:"AASHRAYA	KAM(M)",
//       regno:"/240/A-23/133 of 2010-11",
//       city:"Guwahati",
//       state1:"(ASSAM)",
//       address:"Santipur Hill Side, PNGB Road, (Near Pragati High School), Bharalumukh, Guwahati, Dist.- Kamrup (M)",
//       sectors:"Data Not Found"
//     },function(err,ngo)
//       {
//          if(err)
//          {
//            console.log(err);
//          }
//          else
//            {
//              console.log(ngo);
//            }
//          });

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
app.get("/state",function(req,res)
{
  res.render("state.ejs");
});
//                 })

app.get("/home/assam",function(req,res)
{
   const regex = new RegExp(escapeRegExp("assam"), 'gi');
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
});

app.get("/home/bihar",function(req,res)
{
   const regex = new RegExp(escapeRegExp("bihar"), 'gi');
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
});

app.get("/home/andhara",function(req,res)
{
   const regex = new RegExp(escapeRegExp("andhara Pradash"), 'gi');
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
});

app.get("/home/madhaya",function(req,res)
{
   const regex = new RegExp(escapeRegExp("madhaya Pradash"), 'gi');
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
});

app.get("/home/andha",function(req,res)
{
   const regex = new RegExp(escapeRegExp("ANDAMAN & NICOBAR ISLANDS"), 'gi');
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
});

app.get("/home/chandi",function(req,res)
{
   const regex = new RegExp(escapeRegExp("CHANDIGARH"), 'gi');
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
});

app.get("/home/dadra",function(req,res)
{
   const regex = new RegExp(escapeRegExp("DADRA & NAGAR HAVELI"), 'gi');
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
});

app.get("/home/arunachal",function(req,res)
{
   const regex = new RegExp(escapeRegExp("ARUNACHAL PRADESH"), 'gi');
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
});

app.get("/home/damn",function(req,res)
{
   const regex = new RegExp(escapeRegExp("DAMAN & DIU"), 'gi');
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
});

app.get("/home/himachal",function(req,res)
{
   const regex = new RegExp(escapeRegExp("himachal"), 'gi');
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
});

app.get("/home/delhi",function(req,res)
{
   const regex = new RegExp(escapeRegExp("DELHI"), 'gi');
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
});

app.get("/home/gujarat",function(req,res)
{
   const regex = new RegExp(escapeRegExp("GUJARAT"), 'gi');
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
});

app.get("/home/haryana",function(req,res)
{
   const regex = new RegExp(escapeRegExp("haryana"), 'gi');
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
});

app.get("/home/jammu",function(req,res)
{
   const regex = new RegExp(escapeRegExp("jammu"), 'gi');
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
});

app.get("/home/jharkhand",function(req,res)
{
   const regex = new RegExp(escapeRegExp("jharkhand"), 'gi');
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
});

app.get("/home/karnataka",function(req,res)
{
   const regex = new RegExp(escapeRegExp("Karnataka"), 'gi');
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
});

app.get("/home/kerala",function(req,res)
{
   const regex = new RegExp(escapeRegExp("kerala"), 'gi');
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
});

app.get("/home/maharashtra",function(req,res)
{
   const regex = new RegExp(escapeRegExp("Maharashtra"), 'gi');
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
});

app.get("/home/manipur",function(req,res)
{
   const regex = new RegExp(escapeRegExp("manipur"), 'gi');
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
});

app.get("/home/meghalaya",function(req,res)
{
   const regex = new RegExp(escapeRegExp("meghalaya"), 'gi');
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
});
app.get("/home/nagaland",function(req,res)
{
   const regex = new RegExp(escapeRegExp("nagaland"), 'gi');
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
});

app.get("/home/mizo",function(req,res)
{
   const regex = new RegExp(escapeRegExp("mizoram"), 'gi');
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
});

app.get("/home/orissa",function(req,res)
{
   const regex = new RegExp(escapeRegExp("orissa"), 'gi');
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
});

app.get("/home/punjab",function(req,res)
{
   const regex = new RegExp(escapeRegExp("punjab"), 'gi');
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
});

app.get("/home/rajasthan",function(req,res)
{
   const regex = new RegExp(escapeRegExp("rajasthan"), 'gi');
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
});

app.get("/home/sikkim",function(req,res)
{
   const regex = new RegExp(escapeRegExp("sikkim"), 'gi');
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
});

app.get("/home/tamilnadu",function(req,res)
{
   const regex = new RegExp(escapeRegExp("tamil nadu"), 'gi');
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
});

app.get("/home/telangana",function(req,res)
{
   const regex = new RegExp(escapeRegExp("telangana"), 'gi');
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
});

app.get("/home/tripura",function(req,res)
{
   const regex = new RegExp(escapeRegExp("tripura"), 'gi');
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
});

app.get("/home/uttar",function(req,res)
{
   const regex = new RegExp(escapeRegExp("uttar Pradash"), 'gi');
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
});

app.get("/home/uttara",function(req,res)
{
   const regex = new RegExp(escapeRegExp("Uttarakhand"), 'gi');
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
});
app.get("/home/pudhucherry",function(req,res)
{
   const regex = new RegExp(escapeRegExp("pudhucherry"), 'gi');
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
});

app.get("/home/west",function(req,res)
{
   const regex = new RegExp(escapeRegExp("west BENGAL"), 'gi');
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
});

app.get("/home/goa",function(req,res)
{
   const regex = new RegExp(escapeRegExp("goa"), 'gi');
  ngo.find({ "state1":regex}, function(err, foundngo) {
         if(err) {
           console.log("not found");
           res.render("search.ejs");
             console.log(err);

         } else {
           console.log("found");
            res.render("results.ejs", { foundngo: foundngo });
         }
     });
});

app.get("/home/chhattisgarh",function(req,res)
{
   const regex = new RegExp(escapeRegExp("chhattisgarh"), 'gi');
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
});



app.get("/about",function(req,res)
{
  res.render("about.ejs");
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
