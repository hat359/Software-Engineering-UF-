# InfoGator - API Documentation

## ENDPOINT: /info-gator-api


## Get Frequently Asked Questions

This API returns all the questions for the travel fan page.

GET: /travel/faq


Response Scheme:

ID: string                        // required
Question: string            // required
PostByUserId: string    // required


Example Response:

[
    {
        "ID": "q1",
        "Question": "hello! How are you?",
        "PostedByUserId": "user123"
    },
    {
        "ID": "GdmWL=2UZF",
        "Question": "what the heck",
        "PostedByUserId": "name"
    }
]


## Post Questions

This API accepts the question schema in body and adds it to database. The API also returns the succesfully added question in form of response.

POST: /travel/faq/question


Body scheme:

ID: string                        // required
Question: string            // required
PostByUserId: string    // required


Example Body:

{
    "ID": "q098", 
    "Question": "What's up Gainesville ?",
    "PostedByUserId": "user04"
}


Example Response:

{
    "ID": "q098",
    "Question": "What's up Gainesville ?",
    "PostedByUserId": "user04"
}


## Get Specific Question

This API accepts the ‘question id’ as parameter and returns the question with that id, if found.

GET: /travel/faq/{id}


Parameter:

Id: string                        // required


Response Scheme:

ID: string                        // required
Question: string            // required
PostByUserId: string    // required


Example Response:

{
    "ID": "q1",
    "Question": "hello! How are you?",
    "PostedByUserId": "user123"
}


## Get Answers

This API accepts ‘question id’ as parameter and returns all answers with those ids.

GET: /travel/faq/answers/{questionId}


Parameter:

questionId: string           // required


Response Scheme:

AnswerID:		       // required
QuestionID:		       // required
Answer:			       // required
AnswerByUserId:	       // required


Example Response:

{
        "AnswerID": "ans01",
        "QuestionID": "q1",
        "Answer": "I am fine!",
        "AnswerByUserId": "user03"
}


## Post Answers

This API accepts the answer schema in body and adds it to database. The API also returns the successfully added answer in form of response.

POST: /travel/faq/answer


Body scheme:

AnswerID: string                        // required
QuestionID: string                     // required
Answer: string                           // required
AnswerByUserId: string	       // required


Example Body:

{
        "AnswerID": "ans11",
        "QuestionID": "q1",
        "Answer": "I am super awesome!",
        "AnswerByUserId": "user09"
}


Example Response:

{
    "AnswerID": "ans11",
    "QuestionID": "q1",
    "Answer": "I am super awesome!",
    "AnswerByUserId": "user09"
}



## Get Bank Appointments

This API returns all the appointments scheduled for the bank (finance module).

GET: finance/appointment

Response Scheme:

ID: string                          // required
FirstName: string            // required
LastName: string    	    // required
Email: string			    // required
Address: string		    // required
PassportNumber: string // required
UFID: string			     // required
ZipCode: string		     // required
Contact: string		     // required
Status: string		     // required

Example Response:

[
    {
        ID:             "a1",
        FirstName:      "Anuj",
        LastName:       "Tayal",
        Email:          "anujj.t21@gmail.com",
        Address:        "Gainesville",
        PassportNumber: "XXXXXXXXXX",
        UFID:           "ABCDEFG",
        ZipCode:        "32601",
        Contact:        "1234567890",
        Status:         "Scheduled",
    },
    {
        ID:             "q2",
        FirstName:      "Harsh",
        LastName:       "Athavale",
        Email:          "harsh.a21@gmail.com",
        Address:        "Gainesville",
        PassportNumber: "XXXXXXXXXX",
        UFID:           "HIJKLMN",
        ZipCode:        "32601",
        Contact:        "1234567890",
        Status:         "Scheduled",
    },
]


## Get Specific Bank Appointment

This API accepts ‘appointment id’ as parameter and returns the appointment with that particular id.

GET: /finance/appointment/{id}


Parameter:

id: string           // required


Response Scheme:

ID: string                          // required
FirstName: string            // required
LastName: string    	    // required
Email: string			    // required
Address: string		    // required
PassportNumber: string // required
UFID: string			     // required
ZipCode: string		     // required
Contact: string		     // required
Status: string		     // required

Example Response:

[
    {
        ID:             "a1",
        FirstName:      "Anuj",
        LastName:       "Tayal",
        Email:          "anujj.t21@gmail.com",
        Address:        "Gainesville",
        PassportNumber: "XXXXXXXXXX",
        UFID:           "ABCDEFG",
        ZipCode:        "32601",
        Contact:        "1234567890",
        Status:         "scheduled"
    }
]


## Get Users

This API returns details of all the users.

GET: /users

Response Scheme:

	UserID     //string 
	Username   //string 
	Password   //string 
	FirstName  //string 
	LastName   //string 
	Address    //string 
	Email      //string 
	Zipcode    //string 
	Contact    //string 
    
Example Response:

[
    {
        UserID:         "a1",
        Username:       "anuj.t21",
        FirstName:      "Anuj",
        LastName:       "Tayal",
        Email:          "anujj.t21@gmail.com",
        Address:        "Gainesville",
        ZipCode:        "32601",
        Contact:        "1234567890",
        Password:       "*********",
    }
]


## Post Users

This API accepts the user schema in body and adds it to database. The API also returns the successfully added user in form of response.

POST: /users/add

Body Scheme:

	UserID     : string 
	Username   : string 
	Password   : string 
	FirstName  : string 
	LastName   : string 
	Address    : string 
	Email      : string 
	Zipcode    : string 
	Contact    : string 
    
    
## Get Courses

This API return the details of all the courses.

GET: /academics/courses

Response Scheme:

	CourseID           //string 
	CourseName         //string 
	CourseDepartment   //string 

Example Response:

[
    {
        CourseID:            "Course1",
        CourseName:          "Software Engineering",
        CourseDepartment:    "Computer Science"
    }
]

## Get Course Forum Chats

This API can be called for the chats in the particular course forum section. It accepts Course ID as argument.

GET: /academics/courses/chats/{courseId}

Parameter:

courseId  : string      //required


Body Scheme:

	CourseID   //string 
	UserID     //string 
	ChatID     //string 
	Message    //string
    
Response Scheme:

[
    {
        CourseID:        "Course1",
        UserId:          "User123",
        ChatId:          "Chat010",
        Message:         "Hey! Which Professor is taking the course this sem?"
    }
]
    
    
## Post Chats in Course Forum

This API accepts the chat schema in body and adds it to database. The API also returns the successfully added chats in form of response.

POST: /academics/courses/chats

Body Scheme:
    
	CourseID   //string 
	UserID     //string 
	ChatID     //string 
	Message    //string
    
    
## STATUS CODE SUMMARY:

![Screenshot 2022-04-20 at 9 06 09 PM](https://user-images.githubusercontent.com/52398324/164351325-e307f800-063d-456f-972a-8af5ee6b90ad.png)


