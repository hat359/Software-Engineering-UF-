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
        Status:         "Scheduled",
    }
]


## STATUS CODE SUMMARY:

200 - OK	Everything worked as expected.
400 - Bad Request	The request was unacceptable, often due to missing a required parameter.
401 - Unauthorized	No valid API key provided.
402 - Request Failed	The parameters were valid but the request failed.
403 - Forbidden	The API key doesn't have permissions to perform the request.
404 - Not Found	The requested resource doesn't exist.
409 - Conflict	The request conflicts with another request (perhaps due to using the same idempotent key).
429 - Too Many Requests	Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
500, 502, 503, 504 - Server Errors	Something went wrong on Stripe's end. (These are rare.)


