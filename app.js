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

  ngo.create(
    {
      name:"Anbalayam",
      regno:"1150/2003",
      City:"Moolakulam",
      state:"(PUDUCHERRY)",
      address:"140 (new no 78), Villianur Road Moolakulam Puducherry",
      sectors:"Children,Education & Literacy,Rural Development & Poverty Alleviation,Urban Development & Poverty Alleviation,Vocational Training,Women's Development & Empowerment"
  },function(err,ngo)
      {
         if(err)
         {
           console.log(err);
         }
         else
           {
             console.log(ngo);
           }
         });
  ngo.create(
{
  name:"Anbarasi madhar sangam",
  regno:"9 of 1969",
  name:"Puducherry",
  state1:"(PUDUCHERRY)",
  address:"No.56, Eswaran Kovil Street, Marie Oulgareat, Puducherry",
  sectors:"Data Not Found"

},function(err,ngo)
  {
     if(err)
     {
       console.log(err);
     }
     else
       {
         console.log(ngo);
       }
     });
     ngo.create(
   {
     name:"ADECOM Network",
     regno:"108",
     city:"Pondicherry",
     state1:"(PUDUCHERRY)",
     address:"Plot. No.26 , Fourth Cross street, Extn., Mothilal Nagar, Moolakulam, Pondicherry -605 010",
     sectors:"Right to Information & Advocacy,Rural Development & Poverty Alleviation,Women's Development & Empowerment,Children,Dalit Upliftment,Environment & Forests,Legal Awareness & Aid,Panchayati Raj,Vocational Training",


   },function(err,ngo)
     {
        if(err)
        {
          console.log(err);
        }
        else
          {
            console.log(ngo);
          }
        });
        ngo.create(
      {
        name:"Adishakti Laboratory For Theatre Art Research",
        regno:"50913",
        city:"Puducherry",
         state1:"(PUDUCHERRY)",
        address:"Adwaitam, No.8, Appavou Nagar, Vazhakulam, Puducherry - 605 012",
        sectors:"Art & Culture"

      },function(err,ngo)
        {
           if(err)
           {
             console.log(err);
           }
           else
             {
               console.log(ngo);
             }
           });
           ngo.create(
         {
           name:"Akshaya Self Help Groups Confederation",
           regno:"948/2010",
           city:"Puducherry",
            state1:"(PUDUCHERRY)",
            address:"10, 9th Cross East, Rainbow Nagar, Puducherry-605011",
           sectors:"Micro Finance (SHGs),Panchayati Raj,Vocational Training"

         },function(err,ngo)
           {
              if(err)
              {
                console.log(err);
              }
              else
                {
                  console.log(ngo);
                }
              });

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

//   // ngo.create(
//   // {
//   //   name:"AdityaNatyaAcademy",
//   //   state1:"Andaman & Nicobar Islands",
//   //   regno:"888",
//   //   city:"Port Blair" ,
//   //   address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
//   //     sectors:"Data Not Found"
//   // },function(err,ngo)
//   // {
//   //   if(err)
//   //   {
//   //     console.log(err);
//   //   }
//   //   else
//   //     {
//   //       console.log(ngo);
//   //     }
//   //   });
//   //   ngo.create(
//   //   {
//   //     name:"AdityaNatyaAcademy",
//   //     state1:"Andaman & Nicobar Islands",
//   //     regno:"888",
//   //     city:"Port Blair" ,
//   //     address:"31 M.G. Road, Opp. Sun Sea Resort, Middle Point.",
//   //       sectors:"Data Not Found"
//   //   },function(err,ngo)
//   //   {
//   //     if(err)
//   //     {
//   //       console.log(err);
//   //     }
//   //     else
//   //       {
//   //         console.log(ngo);
//   //       }
//   //     });
//       ngo.create(

//         ngo.create(
//         {
//           name:"Action Research and training Institute",
//           regno:"1876",
//           City:"Rajgarh",
//           state1:"(HIMACHAL PRADESH)",
//           address:"Near SDH , Rajgarh , P.O.- and Tehsil - Rajgarh , Distt- Sirmour ( H.P.) -173101",
//           sectors:"Animal Husbandry, Dairying & Fisheries,Aged/Elderly,Agriculture,Art & Culture,Biotechnology,Children,Civic Issues,Differently Abled,Disaster Management,Dalit Upliftment,Drinking Water,Education & Literacy,Environment & Forests,Food Processing,Health & Family Welfare,HIV/AIDS,Housing,Human Rights,Information & Communication Technology,Legal Awareness & Aid,Labour &  Employment,Land Resources,Micro Finance (SHGs),Minority Issues,Micro Small & Medium Enterprises"
// },function(err,ngo){
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
//
//             name:"Abhinaya Durpan",
//             regno:"396/2006",
//             city:"Shimla",
//             state1:"(HIMACHAL PRADESH)",
//             address:"House No. 145/6 Muslim Trust Building Lower Bazar",
//             sectors:"Art & Culture"
//
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
//               name:"Aavishkaar Yaatraa",
//               regno:"394/2016",
//               city:"Palampur",
//               state1:"(HIMACHAL PRADESH)",
//               address:"Village Kamlehar, Mouza Kandbari",
//               sectors:"Education & Literacy"
//
//
//
// },function(err,ngo)
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
              ngo.create(
              {
                name:"Aasthawelfaresociety Nahan",
                regno:"119/96",
                city:"Nahan",
                state1:"(HIMACHAL PRADESH)",
                address:"Aastha welfare society Nahan Near Panchayat Bhawan Pucca TankChildren",
                sectors:"Differently Abled,Education & Literacy,Aged/Elderly,Vocational Trainin"

    },function(err,ngo)
              {
                if(err)
                {
                  console.log(err);
                }
                else
                  {
                    console.log(ngo);
                  }
                });

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
   const regex = new RegExp(escapeRegExp("(ANDHRA PRADESH)"), 'gi');
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
   const regex = new RegExp(escapeRegExp("MADHYA PRADESH"), 'gi');
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
   const regex = new RegExp(escapeRegExp("Andaman & Nicobar Islands"), 'gi');
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
   const regex = new RegExp(escapeRegExp("CHHATTISGARH"), 'gi');
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
    var l1;
    const regex = new RegExp(escapeRegExp(req.query.name), 'gi');
    console.log(regex);
    ngo.find({ "name": regex }, function(err, foundngo) {
           if(err) {
             console.log("not found");
             res.render("search.ejs");
               console.log(err);

           } else {
             l1=foundngo.length;
             if(l1>0){
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
           else {
            res.render("error.ejs");
           }
         }
       });
  }
});
app.get("/searchbycity",function(req,res)
{
  var l1;
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
             l1=foundngo.length;
             if(l1>0){
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
           else {
            res.render("error.ejs");
           }}
       });
  }
});
app.get("/searchbyreg",function(req,res)
{
  var l1;
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
              l1=foundngo.length;
            if(l1>0){
            console.log("found");
             res.render("results.ejs", { foundngo: foundngo });
          }
          else {
           res.render("error.ejs");
          }
           }
       });
  }
});
app.get("/searchbysector",function(req,res)
{
  var l1;
  if(req.query.sector)
  {
    var l1;
    const regex = new RegExp(escapeRegExp(req.query.sector), 'gi');
    console.log(regex);
    ngo.find({ "sectors": regex }, function(err, foundngo) {
           if(err) {
             console.log("not found");
             res.render("search.ejs");
               console.log(err);

           } else {
             l1=foundngo.length;
             if(l1>0){
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
           else {
            res.render("error.ejs");
           }
           }
       });
  }
});
app.get("/searchbystate",function(req,res)
{
var l1;
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
             l1=foundngo.length;
             if(l1>0){
             console.log("found");
              res.render("results.ejs", { foundngo: foundngo });
           }
           else {
            res.render("error.ejs");
           }
         }
       });
  }
});
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
app.listen(process.env.PORT || 3000);
