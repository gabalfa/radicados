import { Injectable } from '@angular/core';

import { Radicado } from '../../models/radicado.model';

@Injectable({
  providedIn: 'root'
})
export class RadicadosService {

  radicados: Radicado[] = [
  
    {
      "id": "1ea656ce-3b00-41f8-80ea-15dc121aeaac",
      "name": "Elianora Sandars",
      "email": "esandars0@artisteer.com",
      "code": "36800-001",
      "register_date": "01/23/2020",
      "type": "Foxtrot",
      "description": "Business-focused user-facing budgetary management",
      "log": [
        {
          "id": "709d4896-663c-4840-9df8-6ce6b0bc9592",
          "title": "Cardguard",
          "description": "Streamlined asynchronous monitoring",
          "register_date": "1/23/2020",
          "input": true
        }, {
          "id": "99b4a46c-0d9f-4033-90ec-78f13e3e055f",
          "title": "Greenlam",
          "description": "Visionary incremental support",
          "register_date": "1/26/2020",
          "input": false
        }, {
          "id": "9c323b4f-3de4-4477-84df-4351cf0b9ffc",
          "title": "Daltfresh",
          "description": "Total 24 hour concept",
          "register_date": "1/22/2020",
          "input": true
        }, {
          "id": "e0971266-619f-4d0f-87fa-163b5f4eb607",
          "title": "Tin",
          "description": "Business-focused modular matrix",
          "register_date": "1/25/2020",
          "input": true
        }
      ]
    }, {
      "id": "56086d73-9bab-4809-9a07-52d5668b9655",
      "name": "Nobie Broske",
      "email": "nbroske1@storify.com",
      "code": "41163-006",
      "register_date": "01/20/2020",
      "type": "Bravo Papa",
      "description": "Synchronised local capability",
      "log": [
        {
          "id": "3478c10c-3adc-4491-93b8-bc2c7ce41b56",
          "title": "Ronstring",
          "description": "Multi-layered exuding implementation",
          "register_date": "1/22/2020",
          "input": true
        }, {
          "id": "60145031-e6b6-4222-bd9a-b2e1842f3803",
          "title": "Matsoft",
          "description": "Vision-oriented content-based software",
          "register_date": "1/23/2020",
          "input": false
        }
      ]
    }, {
      "id": "4ff75a62-cc70-43e6-9e98-6f0534987b21",
      "name": "Ephrem Reah",
      "email": "ereah2@nbcnews.com",
      "code": "54641-002",
      "register_date": "01/23/2020",
      "type": "Whiskey",
      "description": "Inverse 6th generation toolset",
      "log": [
        {
          "id": "5d43f7f6-3fa1-4e45-be75-e8f8ca13ce66",
          "title": "Gembucket",
          "description": "Adaptive zero tolerance artificial intelligence",
          "register_date": "1/23/2020",
          "input": true
        }, {
          "id": "455ca84f-b6c2-4e8a-b37c-cd502c80d155",
          "title": "Matsoft",
          "description": "Synergized executive initiative",
          "register_date": "1/20/2020",
          "input": false
        }, {
          "id": "8e329513-8b00-4677-9ed3-cfb8a72ab42d",
          "title": "Kanlam",
          "description": "Up-sized dynamic neural-net",
          "register_date": "1/21/2020",
          "input": true
        }
      ]
    }, {
      "id": "7a3fbf47-1025-4ee0-ab3f-d8fb5cd59ed3",
      "name": "Dame Whiteley",
      "email": "dwhiteley3@dyndns.org",
      "code": "43063-204",
      "register_date": "01/24/2020",
      "type": "Kilo Lima Zulu",
      "description": "Re-contextualized local leverage",
      "log": [
        {
          "id": "83e59203-ba89-4ede-a372-1dad4bdf44b2",
          "title": "Y-Solowarm",
          "description": "Phased coherent secured line",
          "register_date": "1/24/2020",
          "input": true
        }, {
          "id": "e313e4ef-acc8-4d16-b481-6e0e64e7d1ca",
          "title": "Gembucket",
          "description": "Fully-configurable zero administration matrix",
          "register_date": "1/21/2020",
          "input": false
        }, {
          "id": "7804af0e-4aae-4418-91bb-58e6078491c4",
          "title": "Toughjoyfax",
          "description": "Down-sized value-added analyzer",
          "register_date": "1/23/2020",
          "input": true
        }
      ]
    }, {
      "id": "625f5682-f1a7-4527-af87-e03a8fdef9d7",
      "name": "Thornton Peasee",
      "email": "tpeasee4@wikimedia.org",
      "code": "43419-014",
      "register_date": "01/24/2020",
      "type": "Foxtrot",
      "description": "Front-line zero administration neural-net",
      "log": [
        {
          "id": "dc8bf1b0-c548-40da-9f22-f82cd4eb0f0e",
          "title": "Zathin",
          "description": "Seamless neutral database",
          "register_date": "1/23/2020",
          "input": true
        }, {
          "id": "6ca142a4-a322-4079-97f2-6a94192c70f4",
          "title": "Greenlam",
          "description": "Automated systemic strategy",
          "register_date": "1/23/2020",
          "input": false
        }, {
          "id": "8e2883b8-1876-4449-be35-c1d371d7839c",
          "title": "Namfix",
          "description": "Sharable interactive extranet",
          "register_date": "1/23/2020",
          "input": true
        }
      ]
    }, {
      "id": "5380cbc2-83cf-4556-93a4-1a017e4c90f5",
      "name": "Lon Windrus",
      "email": "lwindrus5@hhs.gov",
      "code": "36987-2128",
      "register_date": "01/26/2020",
      "type": "Tango",
      "description": "Streamlined didactic benchmark",
      "log": [
        {
          "id": "2ad35bf2-6427-4712-8937-b0fa0e8bf223",
          "title": "Bitchip",
          "description": "Optimized motivating synergy",
          "register_date": "1/21/2020",
          "input": true
        }, {
          "id": "eb253f43-2164-4efe-8135-b8df2af58af6",
          "title": "Home Ing",
          "description": "Enterprise-wide incremental service-desk",
          "register_date": "1/22/2020",
          "input": false
        }, {
          "id": "75e9f095-aca9-4d87-97ec-e0c572a7ce0e",
          "title": "Bamity",
          "description": "Synchronised grid-enabled architecture",
          "register_date": "1/22/2020",
          "input": true
        }
      ]
    }, {
      "id": "30900b54-7876-4b5d-8edd-a573506e3391",
      "name": "Elset Ault",
      "email": "eault6@pen.io",
      "code": "55253-074",
      "register_date": "01/23/2020",
      "type": "Lima November Echo",
      "description": "Re-contextualized bottom-line application",
      "log": [
        {
          "id": "02f877e0-88ce-4098-ad4a-58106d90f045",
          "title": "Biodex",
          "description": "Multi-lateral exuding array",
          "register_date": "1/22/2020",
          "input": true
        }, {
          "id": "e501f850-956d-4c0e-bad1-5a2de87d4884",
          "title": "Duobam",
          "description": "Re-contextualized regional adapter",
          "register_date": "1/24/2020",
          "input": false
        }, {
          "id": "26fd669a-60ae-4109-a0d1-d03d37a98c11",
          "title": "Temp",
          "description": "Monitored grid-enabled capability",
          "register_date": "1/23/2020",
          "input": true
        }, {
          "id": "a56c1e1b-87c6-43b4-91d2-e614926b7b07",
          "title": "Latlux",
          "description": "Profit-focused next generation ability",
          "register_date": "1/21/2020",
          "input": false
        }
      ]
    }, {
      "id": "bba796ae-e050-4faf-baff-c3654b87932d",
      "name": "Charmaine Todarello",
      "email": "ctodarello7@booking.com",
      "code": "65923-557",
      "register_date": "01/24/2020",
      "type": "Papa Hotel Juliett",
      "description": "Compatible maximized groupware",
      "log": [
        {
          "id": "e59f4d02-295a-4bce-8c95-d63effa76e86",
          "title": "Transcof",
          "description": "Down-sized fault-tolerant collaboration",
          "register_date": "1/23/2020",
          "input": true
        }, {
          "id": "f8f7d151-b607-4c24-b93f-216579fb3049",
          "title": "Veribet",
          "description": "Upgradable solution-oriented solution",
          "register_date": "1/21/2020",
          "input": false
        }, {
          "id": "a5880339-8ab4-4e31-8c6d-9322589e0c20",
          "title": "Job",
          "description": "Synergistic holistic analyzer",
          "register_date": "1/25/2020",
          "input": false
        }
      ]
    }, {
      "id": "c79dd5be-53f9-4cc6-b35f-8e255b131440",
      "name": "Georgeta Lidgertwood",
      "email": "glidgertwood8@webeden.co.uk",
      "code": "52959-108",
      "register_date": "01/26/2020",
      "type": "Echo Juliett",
      "description": "Up-sized multi-state database",
      "log": [
        {
          "id": "b4538124-7600-4bce-8dda-8e5b8ce186a4",
          "title": "Ronstring",
          "description": "Mandatory even-keeled utilisation",
          "register_date": "1/25/2020",
          "input": true
        }, {
          "id": "75d83462-b235-40d4-879d-7d4876ee99fd",
          "title": "Subin",
          "description": "Monitored even-keeled encryption",
          "register_date": "1/23/2020",
          "input": false
        }, {
          "id": "bf715692-639b-494a-8116-bad0dbdb76c6",
          "title": "Voltsillam",
          "description": "Configurable national moderator",
          "register_date": "1/22/2020",
          "input": true
        }
      ]
    }, {
      "id": "850bb8f4-bbfb-4889-94c6-c947a040f486",
      "name": "Natka Van T'Hoog",
      "email": "nvan9@elpais.com",
      "code": "10812-388",
      "register_date": "01/22/2020",
      "type": "Hotel",
      "description": "Customizable modular attitude",
      "log": [
        {
          "id": "ca5970cb-f82c-400c-a03e-a42e88b5a483",
          "title": "Overhold",
          "description": "Customizable context-sensitive methodology",
          "register_date": "1/26/2020",
          "input": true
        }, {
          "id": "fb222861-7c58-4f73-bdb7-cfa469c45266",
          "title": "Subin",
          "description": "Ergonomic bandwidth-monitored adapter",
          "register_date": "1/25/2020",
          "input": false
        }, {
          "id": "0d7b7296-4d10-4471-9418-f86d30cde7a0",
          "title": "Temp",
          "description": "Open-architected secondary secured line",
          "register_date": "1/21/2020",
          "input": true
        }
      ]
    }, {
      "id": "de83b399-ba62-4baa-b939-14c5220dc6f5",
      "name": "Bella Larrie",
      "email": "blarriea@discuz.net",
      "code": "52584-904",
      "register_date": "01/25/2020",
      "type": "Bravo Romeo",
      "description": "Re-contextualized zero defect info-mediaries",
      "log": [
        {
          "id": "f3b3dda4-89da-457c-9cbe-b0b66de5b62f",
          "title": "Bigtax",
          "description": "Visionary 4th generation data-warehouse",
          "register_date": "1/25/2020",
          "input": true
        }, {
          "id": "9dc0138a-f254-45a9-a08b-700dfce02022",
          "title": "Zontrax",
          "description": "Upgradable systemic attitude",
          "register_date": "1/23/2020",
          "input": false
        }, {
          "id": "adb8f8b8-244a-4c00-b8cc-f8b81d4ba3ce",
          "title": "Holdlamis",
          "description": "Intuitive 24 hour monitoring",
          "register_date": "1/23/2020",
          "input": true
        }
      ]
    }, {
      "id": "255c2e72-07c7-4f50-b0ad-ddd27bc5cbe4",
      "name": "Ferguson Belden",
      "email": "fbeldenb@wikipedia.org",
      "code": "12546-613",
      "register_date": "01/26/2020",
      "type": "India",
      "description": "De-engineered foreground synergy",
      "log": [
        {
          "id": "d08e5b29-ee28-4975-b9d5-28982a58b7c8",
          "title": "Cookley",
          "description": "Function-based explicit algorithm",
          "register_date": "1/22/2020",
          "input": true
        }, {
          "id": "bf39cc48-e3a5-4f95-ad5d-9bc80c558616",
          "title": "Prodder",
          "description": "Profit-focused multi-tasking protocol",
          "register_date": "1/23/2020",
          "input": false
        }, {
          "id": "bb74e7e8-28b1-4d0d-bb2b-1c7278065bd4",
          "title": "Ronstring",
          "description": "Configurable composite artificial intelligence",
          "register_date": "1/21/2020",
          "input": true
        }
      ]
    }, {
      "id": "a6b86967-8a24-46f3-adcb-cd651afacd74",
      "name": "Skye Vaugham",
      "email": "svaughamc@opera.com",
      "code": "52125-596",
      "register_date": "01/24/2020",
      "type": "Echo X-ray Tango",
      "description": "Synergistic methodical workforce",
      "log": [
        {
          "id": "fb8bcd54-b426-45e4-9760-6555fa8cc4d2",
          "title": "Flexidy",
          "description": "Object-based zero administration software",
          "register_date": "1/24/2020",
          "input": true
        }, {
          "id": "0e9bd70e-3316-4ee9-a7b7-39742cdbedf4",
          "title": "Subin",
          "description": "Upgradable exuding circuit",
          "register_date": "1/22/2020",
          "input": false
        }, {
          "id": "79ee477e-50a3-4145-9fbd-42d98cf3a6f1",
          "title": "Tresom",
          "description": "Self-enabling grid-enabled contingency",
          "register_date": "1/26/2020",
          "input": false
        }
      ]
    }, {
      "id": "1e1f0c5b-ae6e-40b5-8c79-ed0aedf0ef0a",
      "name": "Blane Grelak",
      "email": "bgrelakd@slideshare.net",
      "code": "36987-1122",
      "register_date": "01/26/2020",
      "type": "X-ray",
      "description": "Ameliorated impactful solution",
      "log": [
        {
          "id": "57dce0c1-73e1-4a70-81f6-759c80ec2181",
          "title": "Stringtough",
          "description": "Inverse 5th generation task-force",
          "register_date": "1/25/2020",
          "input": true
        }, {
          "id": "10762ed8-7d32-4ad1-8723-5999ef4983dd",
          "title": "Domainer",
          "description": "Front-line user-facing complexity",
          "register_date": "1/22/2020",
          "input": true
        }, {
          "id": "394ce41e-f659-4c5c-9d4c-adb08dbdf34f",
          "title": "Voyatouch",
          "description": "Quality-focused encompassing attitude",
          "register_date": "1/26/2020",
          "input": true
        }
      ]
    }, {
      "id": "6a9461f1-69dd-4b60-ad41-890c5ff424cf",
      "name": "Dionis Stiegar",
      "email": "dstiegare@themeforest.net",
      "code": "59922-631",
      "register_date": "01/22/2020",
      "type": "Kilo Whiskey",
      "description": "Assimilated human-resource migration",
      "log": [
        {
          "id": "3a432714-65aa-4cb0-a369-14062f00d51d",
          "title": "Zoolab",
          "description": "Up-sized cohesive definition",
          "register_date": "1/24/2020",
          "input": true
        }, {
          "id": "58d2e82c-8427-4fa8-bae1-00c51032b5b4",
          "title": "Alphazap",
          "description": "Ameliorated content-based matrices",
          "register_date": "1/25/2020",
          "input": false
        }, {
          "id": "fb1e8614-f37b-469c-ab72-f81da2f5b723",
          "title": "Konklux",
          "description": "Realigned 6th generation complexity",
          "register_date": "1/21/2020",
          "input": true
        }
      ]
    }, {
      "id": "115bfc4d-cc4f-4e59-9b55-ec4d85216968",
      "name": "Noam Normaville",
      "email": "nnormavillef@prlog.org",
      "code": "0245-0880",
      "register_date": "01/21/2020",
      "type": "X-ray",
      "description": "Seamless grid-enabled contingency",
      "log": [
        {
          "id": "b2222da0-5565-4563-b8b2-d51f97e97129",
          "title": "Y-find",
          "description": "Ameliorated context-sensitive leverage",
          "register_date": "1/25/2020",
          "input": true
        }, {
          "id": "89eceaee-a860-48f8-9c1f-75487e454e23",
          "title": "Regrant",
          "description": "Business-focused scalable challenge",
          "register_date": "1/20/2020",
          "input": false
        }, {
          "id": "8002b70b-73bf-4a8e-b591-82099e8b5d31",
          "title": "Flexidy",
          "description": "Synergistic background neural-net",
          "register_date": "1/26/2020",
          "input": true
        }
      ]
    }, {
      "id": "02dca694-6787-42da-b116-68450af543c1",
      "name": "Marleen Angric",
      "email": "mangricg@nhs.uk",
      "code": "50114-2282",
      "register_date": "01/26/2020",
      "type": "Zulu Oscar",
      "description": "Future-proofed client-driven intranet",
      "log": [
        {
          "id": "aff5ae7e-bb46-40ec-bc6b-62b8f32938bf",
          "title": "Biodex",
          "description": "Team-oriented even-keeled projection",
          "register_date": "1/21/2020",
          "input": true
        }, {
          "id": "17bf1651-f6d9-4644-ba97-a42a7ec30d55",
          "title": "Otcom",
          "description": "Proactive radical monitoring",
          "register_date": "1/25/2020",
          "input": false
        }, {
          "id": "4e1aee4b-9828-40d5-a4cb-2d00de9fc279",
          "title": "Sonair",
          "description": "Networked next generation knowledge base",
          "register_date": "1/22/2020",
          "input": false
        }
      ]
    }, {
      "id": "a6cc99d5-b5cc-482c-b9ab-43dad1668adb",
      "name": "Georgeta Grabban",
      "email": "ggrabbanh@walmart.com",
      "code": "0781-5700",
      "register_date": "01/21/2020",
      "type": "Foxtrot Tango",
      "description": "Public-key human-resource ability",
      "log": [
        {
          "id": "67490e34-a867-4aa4-8a35-a9bf40ce49fe",
          "title": "Fixflex",
          "description": "Down-sized maximized migration",
          "register_date": "1/25/2020",
          "input": true
        }, {
          "id": "e88d4147-e3d6-4594-b4a0-7ef14cfd5a63",
          "title": "Lotlux",
          "description": "Cross-group optimal task-force",
          "register_date": "1/21/2020",
          "input": false
        }, {
          "id": "53bca53e-9812-480e-a474-c065de015069",
          "title": "Bigtax",
          "description": "Profit-focused attitude-oriented ability",
          "register_date": "1/21/2020",
          "input": true
        }
      ]
    }, {
      "id": "38c2909c-e588-4f2e-ab38-83ebf59bde6a",
      "name": "Eberhard Yeardsley",
      "email": "eyeardsleyi@surveymonkey.com",
      "code": "55289-443",
      "register_date": "01/23/2020",
      "type": "Alfa Sierra Mike",
      "description": "Optional zero tolerance task-force",
      "log": [
        {
          "id": "f6f43f2a-c163-48bd-860c-665f7b551d61",
          "title": "Tres-Zap",
          "description": "Intuitive fault-tolerant budgetary management",
          "register_date": "1/24/2020",
          "input": true
        }, {
          "id": "941c6976-433f-4520-8559-3e64968e2298",
          "title": "Holdlamis",
          "description": "Synergized solution-oriented encryption",
          "register_date": "1/26/2020",
          "input": false
        }, {
          "id": "866e9d68-dead-4fe0-9b5f-1a85cd05825a",
          "title": "Bytecard",
          "description": "Enterprise-wide secondary software",
          "register_date": "1/23/2020",
          "input": true
        }
      ]
    }, {
      "id": "b50db3e8-cd2e-4d03-97b5-e80436a20da4",
      "name": "Sydel Crutcher",
      "email": "scrutcherj@ted.com",
      "code": "36987-1974",
      "register_date": "01/23/2020",
      "type": "Mike Yankee",
      "description": "Adaptive well-modulated complexity",
      "log": [
        {
          "id": "f9e95278-5a4e-4fde-a574-702e3b97bf00",
          "title": "Overhold",
          "description": "User-friendly intangible analyzer",
          "register_date": "1/22/2020",
          "input": true
        }, {
          "id": "94cee3e6-244a-4d15-9793-b62ccdbf6811",
          "title": "Voltsillam",
          "description": "Open-source discrete flexibility",
          "register_date": "1/20/2020",
          "input": false
        }, {
          "id": "7f498831-edc3-4cce-849a-02d1f8cc9bf2",
          "title": "Tin",
          "description": "Configurable needs-based framework",
          "register_date": "1/23/2020",
          "input": true
        }
      ]
    }, {
      "id": "401f975d-06e7-42c0-ae42-30d643d233ad",
      "name": "Alwyn Anfosso",
      "email": "aanfossok@123-reg.co.uk",
      "code": "68788-9741",
      "register_date": "01/21/2020",
      "type": "Golf Quebec",
      "description": "Realigned leading edge synergy",
      "log": [
        {
          "id": "9ac19a2d-d6e9-4657-b163-2021c40f24da",
          "title": "Home Ing",
          "description": "Front-line full-range product",
          "register_date": "1/26/2020",
          "input": true
        }, {
          "id": "28248f51-ba2e-4e12-9d75-6f9032fdf631",
          "title": "Lotlux",
          "description": "Organized asynchronous hierarchy",
          "register_date": "1/24/2020",
          "input": false
        }, {
          "id": "2e79a97e-f03e-453d-b38b-66518a2338a4",
          "title": "Holdlamis",
          "description": "Expanded motivating standardization",
          "register_date": "1/20/2020",
          "input": false
        }
      ]
    }, {
      "id": "f2bb21f6-aaab-4e25-9fe5-a61549a7cbc5",
      "name": "Berta Woffenden",
      "email": "bwoffendenl@ebay.co.uk",
      "code": "49852-181",
      "register_date": "01/22/2020",
      "type": "X-ray Hotel",
      "description": "Compatible 4th generation complexity",
      "log": [
        {
          "id": "c2b5364b-766a-4290-a9a5-51263106c459",
          "title": "Voltsillam",
          "description": "Centralized user-facing core",
          "register_date": "1/21/2020",
          "input": true
        }, {
          "id": "666d4aac-1ced-4e71-bb1e-817dd0959caa",
          "title": "Alphazap",
          "description": "Vision-oriented multimedia standardization",
          "register_date": "1/23/2020",
          "input": false
        }, {
          "id": "7d3a3d5e-2ed6-4752-a070-ae9751efb99e",
          "title": "Zathin",
          "description": "Organic secondary secured line",
          "register_date": "1/22/2020",
          "input": false
        }
      ]
    }, {
      "id": "0b0f3ca6-c625-44b2-a9b4-5c4b403dfb4d",
      "name": "Ardis Dake",
      "email": "adakem@omniture.com",
      "code": "98132-135",
      "register_date": "01/25/2020",
      "type": "Juliett",
      "description": "Implemented dynamic policy",
      "log": [
        {
          "id": "49a62f34-2264-406d-8f59-e6e49f701d0b",
          "title": "Job",
          "description": "Expanded solution-oriented knowledge base",
          "register_date": "1/22/2020",
          "input": true
        }, {
          "id": "12fdb0d5-73a7-483d-a9a9-84d2c7b62587",
          "title": "Cardguard",
          "description": "Sharable homogeneous throughput",
          "register_date": "1/20/2020",
          "input": false
        }, {
          "id": "8305fed2-6455-40ae-9343-777e24aca5ca",
          "title": "Zoolab",
          "description": "Integrated dedicated productivity",
          "register_date": "1/20/2020",
          "input": true
        }, {
          "id": "8ca8b1cb-350d-42ab-a807-6b7b640e8862",
          "title": "Konklux",
          "description": "Advanced holistic success",
          "register_date": "1/24/2020",
          "input": false
        }, {
          "id": "629e664f-c7c2-4e8c-a006-89695b8cbb83",
          "title": "Fix San",
          "description": "Configurable actuating firmware",
          "register_date": "1/25/2020",
          "input": true
        }
      ]
    }
  
  ];

  constructor() { }

  getAllRadicados() {
    return this.radicados;
  }

  getRadicado(id: string) {
    return this.radicados.find(item => id === item.id);
  }
}
