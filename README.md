## Card Model Library-HarmonyOS

Library developed using JavaScript for HarmonyOS


Watch the video to view how the appointment-card and article-card would be.


https://user-images.githubusercontent.com/52703087/146629005-eecd9533-5a3c-43b1-a598-185bc51516cb.mp4

## Installation

Use the below code to import the `Card Component` in your `entrty/src/main/js/default/pages/index/index.html` file

`<element name="Card" src="../../../../../../node_modules/CardComponent/Card/index.hml"></element>`

## Usage

```hml
<div class="container">
// for Appointment-Card
    <Card type="appointment-card" name="Sai Sumedh" sub_title="Dental" image="https://lh3.googleusercontent.com/ogw/ADea4I5L0IsuKGGz3Ne1DGm44fm2W3x2zq9vS9kiMlDP3A=s32-c-mo"></Card>
// for Article-Card    
    <Card type="article" name="The developer guide" sub_title="5 days ago" desc="This is a sample article. Please use this library to get awesome article components." likes="300" views="967" btncolor="gray" image="https://static4.depositphotos.com/1004590/372/i/600/depositphotos_3729494-stock-photo-new-paper-article.jpg"></Card>
</div>
```

### Appointment Card
<img src="https://user-images.githubusercontent.com/52703087/145769482-b65038be-7de4-403d-9c05-3827a8d2a4ac.PNG" width="340px" height="250px" />

### Article Card
<img src="https://user-images.githubusercontent.com/52703087/146210763-4ccc2d26-1119-4c12-aed9-1609bb05457a.PNG" width="300px" height="560px" />

## Card 

`It has a prop named `type` it denotes which type of card should be displayed in the app.`

## Using different Type of Card with Props

### Props for Appointment Card

| Parameter       | Default               | Description                                                                  |
|-----------------|-----------------------|------------------------------------------------------------------------------|
| name            | null                  | It denotes the name of the doctor for which we have scheduled the appointment|
| sub_title       | null                  | Sub_title specifies the a text with doctor's specialization                  |
| image           | null                  | It will be an image of the doctor                                            |
    
### Props for Article Card

| Parameter       | Default           | Description                                                                         |
|-----------------|-------------------|-------------------------------------------------------------------------------------|
| name            | null              | value which specifies name of the article                                           |
| sub_title       | null              | value that specifies the sub_title of a particular article                          |
| image           | null              | image of an article                                                                 |
| desc            | null              | description of the article                                                          |
| likes           | null              | count of likes for the article                                                      |
| views           | null              | count of article views                                                              |
| btncolor        | null              | the text we specify here will display the background-color of the Read-More button  |
