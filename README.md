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
  3. url : "/camcann/submitImageData"<br>
     type: POST<br>
     request body structure
     ```json
         {
          "TIME": "String",
          "CAMERA": "String",
          "CONFIDENCE": "Number",
          "IMAGELABEL": "String",
          "IMAGECOORDINATES": {
            "x1": "Number",
            "y1": "Number",
            "x2": "Number",
            "y2": "Number",
            }
         
         }
        ```
