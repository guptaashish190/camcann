# CAMCANN
CCTV VIDEO ANALYSIS

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
          "lowTime": "String (format strict('YYYY-MM-DD HH:MM:SS')  24HR FORMAT)",
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
