# CAMCANN
CCTV VIDEO ANALYSIS

(Date Format Used : YYYY-MM-DD HH:MM:SS.mm)

Routes-
  1. "/"<br>
    type: get<br>
    index<br>
    <hr />
  2. "/camcann"<br>
      type: get<br>
      router test route<br>
      <hr />
  3. url : "/camcann/post/submitImageData"<br>
     type: POST<br>
     request body structure
     ```json
         {
          "time": "String",
          "camera": "String",
          "confidence": "Number",
          "label": "String",
          "url": "String",
          "number_read": "String",
          "coordinates": {
            "x1": "Number",
            "y1": "Number",
            "x2": "Number",
            "y2": "Number",
            }
         
         }
        ```
 4. url: "/camcann/get/findlabel" <br>
    type: GET<br>
    use: Get the number of image objects with a specific label that passed x minutes(lowTime) before the current time.
    request query structure
    ```json
     {
      "camera": "String",
      "label": "String (in minutes)",
      "lowtime": "String Date",
      "currentTime": "String Same Format"
     }
    ```
    response structure 
    ```json
     {
        "response": "false|true",
        "count": "Image Count(Number)"
        }
    ```
  5. url: "/camcann/get/getFromTimeRange" <br>
      type: GET<br>
      use: Get the all the images between a time range of a particular camera and label;
      request query structure
      ```json
       {
        "camera": "String",
        "label": "String",
        "startTime": "String Date",
        "endTime": "String Date"
       }
      ```
      response structure 
      ```json
       {
          "images": "Image Objects",
          "count": "Image Count(Number)"
          }
      ```
  6. url: "/camcann/get/findMinConfidence" <br>
      type: GET<br>
      use: Get the all the images that have confidence above a particular percentage
      request query structure
      ```json
       {
        "camera": "String",
        "label": "String",
        "confidence": "Number"
       }
      ```
      response structure 
      ```json
       {
          "images": "Image Objects",
          "count": "Image Count(Number)"
          }
      ```
   7. url: "/camcann/get/findlastfivetotwenty" <br>
      type: GET<br>
      use: Get the all the images that have passed a camera x that has a label y, [5, 10, 15, 20] minutes before the current time.
      request query structure
      ```json
       {
        "camera": "String",
        "label": "String",
        "currentTime": "String Date"
       }
      ```
      response structure 
      ```json
       {
        "response": {
        "5": "list of image objects",
        "10": "list of image objects",
        "15": "list of image objects",
        "20": "list of image objects"
        }
          }
      ```
