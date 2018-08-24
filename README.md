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
         "data": {
              "topleft": {
                  "y": "Number",
                  "x": "Number"
              },
              "bottomRight": {
                  "y": "Number",
                  "x": "Number",
              },
              "camera": "String",
              "confidence": "Number",
              "label": "String",
          },
          "time": "String",
        }
        ```
