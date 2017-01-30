'use strict';

describe('Service: matchFinder', function () {

    beforeEach(module('app'));
    var matchFinder;
    var computerAvailabilitiesList = [];
    var librariesList = {};
    beforeEach(inject(function (_matchFinder_) {
        matchFinder = _matchFinder_;
        librariesList = {
            "locations": [
                {
                    "lid": 3823,
                    "name": "Architecture & Music Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/architecture-music-library",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#1C6DBD",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Arch Music",
                    "departments": [
                        {
                            "lid": 3828,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3823,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "9am",
                                        "to": "5pm"
                                    }
                                ]
                            },
                            "rendered": "9am - 5pm",
                            "open": "09:00:00",
                            "close": "17:00:00"
                        }
                    ]
                },
                {
                    "lid": 4986,
                    "name": "AskUs chat & phone assistance",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/contact-us",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#000000",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "AskUs",
                    "departments": [
                        {
                            "lid": 4987,
                            "name": "Chat & phone",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 4986,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8am",
                                        "to": "5pm"
                                    }
                                ]
                            },
                            "rendered": "8am - 5pm",
                            "open": "08:00:00",
                            "close": "17:00:00"
                        }
                    ]
                },
                {
                    "lid": 3824,
                    "name": "Biological Sciences Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/biological-sciences-library",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#0E6E0E",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Biol Sci",
                    "departments": [
                        {
                            "lid": 3829,
                            "name": "Study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3824,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        }
                    ]
                },
                {
                    "lid": 3825,
                    "name": "Dorothy Hill Engineering and Sciences Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/dorothy-hill-engineering-and-sciences-library",
                    "contact": "",
                    "fn": "after hours UQ ID card access to the Level 1, 24/7 space via Cooper Rd.",
                    "lat": "",
                    "long": "",
                    "color": "#1C6DBD",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "DHEngSci",
                    "departments": [
                        {
                            "lid": 3826,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3825,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "9am",
                                        "to": "5pm"
                                    }
                                ]
                            },
                            "rendered": "9am - 5pm",
                            "open": "09:00:00",
                            "close": "17:00:00"
                        },
                        {
                            "lid": 3827,
                            "name": "Level 1 study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3825,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        }
                    ]
                },
                {
                    "lid": 3830,
                    "name": "Duhig Tower",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/duhig-tower",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#0E6E0E",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Duhig Study",
                    "departments": [
                        {
                            "lid": 3831,
                            "name": "Study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3830,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        },
                        {
                            "lid": 4371,
                            "name": "Centre for Digital Scholarship",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3830,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        }
                    ]
                },
                {
                    "lid": 3832,
                    "name": "Fryer Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/fryer-library",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#1C6DBD",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Fryer",
                    "departments": [
                        {
                            "lid": 3851,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3832,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "10am",
                                        "to": "4pm"
                                    }
                                ]
                            },
                            "rendered": "10am - 4pm",
                            "open": "10:00:00",
                            "close": "16:00:00"
                        }
                    ]
                },
                {
                    "lid": 3833,
                    "name": "Gatton Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/uq-gatton-library-jk-murray-library",
                    "contact": "",
                    "fn": "after hours UQ ID card access to the lower level, 24/7 space.",
                    "lat": "",
                    "long": "",
                    "color": "#0E6E0E",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Gatton",
                    "departments": [
                        {
                            "lid": 3834,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3833,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8:30am",
                                        "to": "4:30pm"
                                    }
                                ]
                            },
                            "rendered": "8:30am - 4:30pm",
                            "open": "08:30:00",
                            "close": "16:30:00"
                        },
                        {
                            "lid": 3835,
                            "name": "Study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3833,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        }
                    ]
                },
                {
                    "lid": 3836,
                    "name": "Graduate Economics and Business Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/graduate-economics-and-business-library",
                    "contact": "",
                    "fn": "Business, Economics and Tourism postgraduate students only. UQ ID card access.",
                    "lat": "",
                    "long": "",
                    "color": "#1C6DBD",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "GradEcoBus",
                    "departments": [
                        {
                            "lid": 3837,
                            "name": "Study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3836,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        }
                    ]
                },
                {
                    "lid": 3838,
                    "name": "Herston Health Sciences Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "<p style=\"box-sizing: border-box; color: rgb(34, 34, 34); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;\">The library provides resources and services to support the teaching, learning and research needs of:</p>\r\n\r\n<ul style=\"box-sizing: border-box; color: rgb(34, 34, 34); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;\">\r\n\t<li style=\"box-sizing: border-box;\">UQ staff and students</li>\r\n\t<li style=\"box-sizing: border-box;\">Staff of the Royal Brisbane and Women&#39;s Hospital (RBWH) and the</li>\r\n\t<li style=\"box-sizing: border-box;\">Lady Cilento Children&#39;s Hospital</li>\r\n</ul>\r\n\r\n<p style=\"box-sizing: border-box; color: rgb(34, 34, 34); font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;\">RBWH &amp; Lady Cilento Children&#39;s Hospital&nbsp;staff see&nbsp;<a href=\"https://web.library.uq.edu.au/library-services/services-hospital-staff\" style=\"box-sizing: border-box; color: rgb(35, 119, 203); text-decoration: none; background-color: transparent;\">services for hospital staff</a>&nbsp;for more information.</p>",
                    "url": "https://web.library.uq.edu.au/locations-hours/herston-health-sciences-library",
                    "contact": "",
                    "fn": "after hours swipe card access to the 24/7 space. Apply for access in the library.",
                    "lat": "",
                    "long": "",
                    "color": "#0E6E0E",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Herston",
                    "departments": [
                        {
                            "lid": 3839,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3838,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8am",
                                        "to": "5pm"
                                    }
                                ]
                            },
                            "rendered": "8am - 5pm",
                            "open": "08:00:00",
                            "close": "17:00:00"
                        },
                        {
                            "lid": 3840,
                            "name": "Study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3838,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        }
                    ]
                },
                {
                    "lid": 3841,
                    "name": "Law Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/law-library-walter-harrison-library",
                    "contact": "",
                    "fn": "Law Library closed for refurbishment 27th Nov 2015 and reopens before Semester 1, 2017.",
                    "lat": "",
                    "long": "",
                    "color": "#1C6DBD",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Law",
                    "departments": [
                        {
                            "lid": 3849,
                            "name": "Service",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3841,
                            "times": {
                                "currently_open": false,
                                "status": "closed"
                            },
                            "rendered": "Closed"
                        },
                        {
                            "lid": 4801,
                            "name": "Collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3841,
                            "times": {
                                "currently_open": false,
                                "status": "closed"
                            },
                            "rendered": "Closed"
                        },
                        {
                            "lid": 3850,
                            "name": "Study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3841,
                            "times": {
                                "currently_open": false,
                                "status": "closed"
                            },
                            "rendered": "Closed"
                        }
                    ]
                },
                {
                    "lid": 3966,
                    "name": "Mater McAuley Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/uqmater-mcauley-library",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#0E6E0E",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Mater",
                    "departments": [
                        {
                            "lid": 3968,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3966,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8am",
                                        "to": "5pm"
                                    }
                                ]
                            },
                            "rendered": "8am - 5pm",
                            "open": "08:00:00",
                            "close": "17:00:00"
                        },
                        {
                            "lid": 4384,
                            "name": "Whitty building study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3966,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        }
                    ]
                },
                {
                    "lid": 3967,
                    "name": "PACE Health Sciences Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/pace-health-sciences-library",
                    "contact": "",
                    "fn": "Access Info: no entry to PACE building after 9pm.",
                    "lat": "",
                    "long": "",
                    "color": "#1C6DBD",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "PACE",
                    "departments": [
                        {
                            "lid": 3969,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3967,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8am",
                                        "to": "5pm"
                                    }
                                ]
                            },
                            "rendered": "8am - 5pm",
                            "open": "08:00:00",
                            "close": "17:00:00"
                        },
                        {
                            "lid": 3970,
                            "name": "Study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3967,
                            "times": {
                                "currently_open": true,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "7am",
                                        "to": "5pm"
                                    }
                                ]
                            },
                            "rendered": "7am - 5pm",
                            "open": "07:00:00",
                            "close": "17:00:00"
                        }
                    ]
                },
                {
                    "lid": 3842,
                    "name": "Social Sciences & Humanities Library",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/social-sciences-humanities-library",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#0E6E0E",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "SSAH",
                    "departments": [
                        {
                            "lid": 3843,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3842,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8am",
                                        "to": "5pm"
                                    }
                                ]
                            },
                            "rendered": "8am - 5pm",
                            "open": "08:00:00",
                            "close": "17:00:00"
                        },
                        {
                            "lid": 3844,
                            "name": "Study space",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3842,
                            "times": {
                                "currently_open": true,
                                "status": "24hours"
                            },
                            "rendered": "24 Hours",
                            "open": "00:00:00",
                            "close": "24:00:00"
                        }
                    ]
                },
                {
                    "lid": 3846,
                    "name": "RCS Library - Bundaberg",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/rural-clinical-school-rcs-library",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#1C6DBD",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Bundaberg",
                    "departments": [
                        {
                            "lid": 3852,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3846,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8:45am",
                                        "to": "4:45pm"
                                    }
                                ]
                            },
                            "rendered": "8:45am - 4:45pm",
                            "open": "08:45:00",
                            "close": "16:45:00"
                        }
                    ]
                },
                {
                    "lid": 3847,
                    "name": "RCS Library - Hervey Bay",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/rural-clinical-school-rcs-library",
                    "contact": "",
                    "fn": "after hours swipe card access to 24/7 space for medical students.",
                    "lat": "",
                    "long": "",
                    "color": "#0E6E0E",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "HerveyBay",
                    "departments": [
                        {
                            "lid": 3853,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3847,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8:30am",
                                        "to": "4:30pm"
                                    }
                                ]
                            },
                            "rendered": "8:30am - 4:30pm",
                            "open": "08:30:00",
                            "close": "16:30:00"
                        }
                    ]
                },
                {
                    "lid": 3868,
                    "name": "RCS Library - Rockhampton",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/rural-clinical-school-rcs-library",
                    "contact": "",
                    "fn": "",
                    "lat": "",
                    "long": "",
                    "color": "#1C6DBD",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Rockhampton",
                    "departments": [
                        {
                            "lid": 3870,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3868,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8:30am",
                                        "to": "4:30pm"
                                    }
                                ]
                            },
                            "rendered": "8:30am - 4:30pm",
                            "open": "08:30:00",
                            "close": "16:30:00"
                        }
                    ]
                },
                {
                    "lid": 3869,
                    "name": "RCS Library - Toowoomba",
                    "category": "library",
                    "day": "Friday",
                    "desc": "",
                    "url": "https://web.library.uq.edu.au/locations-hours/rural-clinical-school-rcs-library",
                    "contact": "",
                    "fn": "after hours swipe card access to 24/7 space for RCS students.",
                    "lat": "",
                    "long": "",
                    "color": "#0E6E0E",
                    "times": {
                        "currently_open": false,
                        "status": "text",
                        "text": " "
                    },
                    "rendered": " ",
                    "abbr": "Toowoomba",
                    "departments": [
                        {
                            "lid": 3871,
                            "name": "Service & collections",
                            "category": "department",
                            "day": "Friday",
                            "desc": "",
                            "url": "",
                            "contact": "",
                            "lat": "",
                            "long": "",
                            "color": "#000000",
                            "parent_lid": 3869,
                            "times": {
                                "currently_open": false,
                                "status": "open",
                                "hours": [
                                    {
                                        "from": "8:30am",
                                        "to": "4:30pm"
                                    }
                                ]
                            },
                            "rendered": "8:30am - 4:30pm",
                            "open": "08:30:00",
                            "close": "16:30:00"
                        }
                    ]
                }
            ]
        };
        computerAvailabilitiesList = [
            {
                "library": "Architecture &amp; Music Library",
                "availability": {
                    "Level 3": {
                        "roomCode": "Lvl3",
                        "Available": 42,
                        "Occupied": 4,
                        "floorplan": true
                    }
                },
                "buildingCode": "Armus",
                "buildingNumber": 51
            },
            {
                "library": "Biological Sciences Library",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 16,
                        "Occupied": 14,
                        "floorplan": true
                    },
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 56,
                        "Occupied": 21,
                        "floorplan": true
                    },
                    "Level 3": {
                        "roomCode": "Lvl3",
                        "Available": 23,
                        "Occupied": 10,
                        "floorplan": true
                    },
                    "Level 4": {
                        "roomCode": "Lvl4",
                        "Available": 29,
                        "Occupied": 11,
                        "floorplan": true
                    }
                },
                "buildingCode": "BSL",
                "buildingNumber": 94
            },
            {
                "library": "D.H. Engineering &amp; Sciences Library",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 17,
                        "Occupied": 1,
                        "floorplan": true
                    },
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 59,
                        "Occupied": 2,
                        "floorplan": true
                    },
                    "Level 3": {
                        "roomCode": "Lvl3",
                        "Available": 29,
                        "Occupied": 0,
                        "floorplan": true
                    },
                    "Level 4": {
                        "Occupied": 1,
                        "roomCode": "Lvl4",
                        "Available": 0
                    }
                },
                "buildingCode": "DHESL",
                "buildingNumber": 50
            },
            {
                "library": "Duhig Building",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 28,
                        "Occupied": 5,
                        "floorplan": true
                    },
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 74,
                        "Occupied": 26,
                        "floorplan": true
                    },
                    "Level 4": {
                        "roomCode": "Lvl4",
                        "Available": 11,
                        "Occupied": 2,
                        "floorplan": true
                    },
                    "Level 5": {
                        "roomCode": "Lvl5",
                        "Available": 24,
                        "Occupied": 1,
                        "floorplan": false
                    }
                },
                "buildingCode": "Duhig",
                "buildingNumber": 2
            },
            {
                "library": "Graduate Economics &amp; Business Library",
                "availability": {
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 36,
                        "Occupied": 1,
                        "floorplan": false
                    }
                },
                "buildingCode": "Ecob",
                "buildingNumber": 39
            },
            {
                "library": "Gatton Campus Library",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 66,
                        "Occupied": 1,
                        "floorplan": true
                    },
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 18,
                        "Occupied": 0,
                        "floorplan": true
                    }
                },
                "buildingCode": "Gatton",
                "buildingNumber": 8102
            },
            {
                "library": "Herston Health Sciences Library",
                "availability": {
                    "Level 6": {
                        "roomCode": "Lvl6",
                        "Available": 35,
                        "Occupied": 7,
                        "floorplan": true
                    }
                },
                "buildingCode": "HSL",
                "buildingNumber": null
            },
            {
                "library": "Mater Hospital Library",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 27,
                        "Occupied": 1,
                        "floorplan": false
                    }
                },
                "buildingCode": "Mater",
                "buildingNumber": null
            },
            {
                "library": "PACE Health Sciences Library",
                "availability": {
                    "Level 6": {
                        "roomCode": "Lvl6",
                        "Available": 61,
                        "Occupied": 5,
                        "floorplan": false
                    }
                },
                "buildingCode": "PACE",
                "buildingNumber": null
            },
            {
                "library": "Social Sciences &amp; Humanities Library",
                "availability": {
                    "Level 1 Entry": {
                        "roomCode": "Link",
                        "Available": 36,
                        "Occupied": 16,
                        "floorplan": true
                    },
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 19,
                        "Occupied": 3,
                        "floorplan": true
                    },
                    "Level 3": {
                        "roomCode": "Lvl3",
                        "Available": 27,
                        "Occupied": 6,
                        "floorplan": true
                    },
                    "Level 4": {
                        "roomCode": "Lvl4",
                        "Available": 11,
                        "Occupied": 3,
                        "floorplan": true
                    }
                },
                "buildingCode": "SSAH",
                "buildingNumber": 12
            }
        ];


    }));
    it('should find library name signature', function () {
        expect(matchFinder.findLibraryNameSignature("Test Herston Library & Hospital and Building tower &amp; campus Graduate sciences"))
            .toEqual(["test", "herston", "t", "h"]);
    });

    it('should find computer availability based on the library name in librariesList(Architecture & Music Test)', function () {
        expect(matchFinder.findComputerAvailabilityByLibraryName(computerAvailabilitiesList, "Architecture & Music Library"))
            .toEqual( {
                "library": "Architecture &amp; Music Library",
                "availability": {
                    "Level 3": {
                        "roomCode": "Lvl3",
                        "Available": 42,
                        "Occupied": 4,
                        "floorplan": true
                    }
                },
                "buildingCode": "Armus",
                "buildingNumber": 51
            });
    });
    it('should find computer availability based on the library name in librariesList(Dorothy Hill Test)', function () {
        expect(matchFinder.findComputerAvailabilityByLibraryName(computerAvailabilitiesList, "Dorothy Hill Engineering and Sciences Library"))
            .toEqual({
                "library": "D.H. Engineering &amp; Sciences Library",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 17,
                        "Occupied": 1,
                        "floorplan": true
                    },
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 59,
                        "Occupied": 2,
                        "floorplan": true
                    },
                    "Level 3": {
                        "roomCode": "Lvl3",
                        "Available": 29,
                        "Occupied": 0,
                        "floorplan": true
                    },
                    "Level 4": {
                        "Occupied": 1,
                        "roomCode": "Lvl4",
                        "Available": 0
                    }
                },
                "buildingCode": "DHESL",
                "buildingNumber": 50
            });
    });
    it('should find computer availability based on the library name in librariesList(Mater Test)', function () {
        expect(matchFinder.findComputerAvailabilityByLibraryName(computerAvailabilitiesList, "Mater McAuley Library"))
            .toEqual({
                "library": "Mater Hospital Library",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 27,
                        "Occupied": 1,
                        "floorplan": false
                    }
                },
                "buildingCode": "Mater",
                "buildingNumber": null
            });
    });
    it('should find computer availability based on the library name in librariesList(Gatton Test)', function () {
        expect(matchFinder.findComputerAvailabilityByLibraryName(computerAvailabilitiesList, "Gatton Library"))
            .toEqual({
                "library": "Gatton Campus Library",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 66,
                        "Occupied": 1,
                        "floorplan": true
                    },
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 18,
                        "Occupied": 0,
                        "floorplan": true
                    }
                },
                "buildingCode": "Gatton",
                "buildingNumber": 8102
            });
    });
    it('should find computer availability based on the library name in librariesList(Duhig Test)', function () {
        expect(matchFinder.findComputerAvailabilityByLibraryName(computerAvailabilitiesList, "Duhig Tower"))
            .toEqual({
                "library": "Duhig Building",
                "availability": {
                    "Level 1": {
                        "roomCode": "Lvl1",
                        "Available": 28,
                        "Occupied": 5,
                        "floorplan": true
                    },
                    "Level 2": {
                        "roomCode": "Lvl2",
                        "Available": 74,
                        "Occupied": 26,
                        "floorplan": true
                    },
                    "Level 4": {
                        "roomCode": "Lvl4",
                        "Available": 11,
                        "Occupied": 2,
                        "floorplan": true
                    },
                    "Level 5": {
                        "roomCode": "Lvl5",
                        "Available": 24,
                        "Occupied": 1,
                        "floorplan": false
                    }
                },
                "buildingCode": "Duhig",
                "buildingNumber": 2
            });
    });

    it('should not find any library for Fryer Library', function () {
        expect(matchFinder.findComputerAvailabilityByLibraryName(computerAvailabilitiesList, "Fryer Library"))
            .toEqual(false);
    });


});
