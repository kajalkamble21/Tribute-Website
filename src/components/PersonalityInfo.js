// src/components/PersonalityInfo.js
import React from 'react';
import './styles.css'; // Import the external CSS file

const PersonalityInfo = () => {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://irrfan-khan.netlify.app/circle-cropped.png"
            alt="Inspirational Personality"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 className="center"> Irfan Ali Khan</h1>
          <p>
            Sahabzade Irfan Ali Khan (7 January 1967 – 29 April 2020) was an Indian actor, known
            for his work predominantly in Hindi cinema, in addition to British and American films.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h2 className="heading-center">Early Life and Education</h2>
          <ol>
            <li>
              Khan was born in Rajasthan to a Muslim family of Pathan ancestry. Khan's mother, Saeeda Begum Khan, and father, Yaseen Ali Khan, were from the Khajuriya village near Rajasthan's Tonk district, and ran a tyre business.
            </li>
            <li>
              Irrfan was good at cricket and was selected to play in the CK Nayudu Trophy for emerging players in the under-23 category, a tournament seen as a stepping stone to first-class cricket in India.
            </li>
            <li>
              Khan completed his MA in Jaipur before joining National School of Drama (NSD) in New Delhi in 1984 to study acting.
            </li>
          </ol>
          <h2 className="heading-center">National recognition</h2> 
          <ol>
            <li>
              His first Bollywood lead role came in 2005 with film Rog. His performance was praised by critics; one wrote, "Irfaan's eyes speak louder than his words and every time he is in frame, be it talking to his buddy Manish or arguing with Suhel, he shows his capability as an actor"
            </li>
            <li>
              In 2004, he won the Filmfare Best Villain Award for his role in film Haasil.
              In 2007, he appeared in the box office hits Life in a... Metro, for which he received the Filmfare Best Supporting Actor Award
            </li>
          </ol>

          <h2 className="heading-center">International success</h2> 

          <ol>
            <li>
              Khan played a police inspector in the 2008 film Slumdog Millionaire, for which he and the cast of the movie won a Screen Actors Guild Award for Outstanding Performance by a Cast in a Motion Picture.             
            </li>
            <li>
              His film, Paan Singh Tomar, about real-life athlete turned dacoit, for which he won the National Film Award for Best Actor
            </li>
            <li>
              In 2013, he starred in The Lunchbox, which won the Grand Rail d'Or at Cannes Film Festival and received a BAFTA nomination, and became his highest-grossing Hindi film up until then.
            </li>
            <li>
              As of 2017, his films have grossed US$3.643 billion at the worldwide box office.
            </li>
          </ol>

          <h2 className="heading-center">Personal life</h2>
          <ol>
            <li>
              In February 1995, Khan married writer and fellow NSD graduate Sutapa Sikdar. They had two sons.
            </li>
            <li>
              In 2012, he changed his name from Irfan to Irrfan; he said he liked the sound of the extra r in his name. He later dropped Khan from his name because—according to a 2016 interview—he wanted his work to define him, not his lineage
            </li>
          </ol>
          <h2 className="heading-center">Illness and death</h2>
          <ol>
            <li>
              In March 2018, Khan revealed via a tweet that he had been diagnosed with a neuroendocrine tumor.He sought treatment in the UK for a year, returning in February 2019
            </li>
            <li>
              He was admitted to Mumbai's Kokilaben Dhirubhai Ambani Hospital on 28 April 2020, where he started receiving treatment for a colon infection. He died the following day at age 53, from the infection.
            </li>
          </ol>
        </div>
      </div>

     <div className='awards'>
        <h2>Awards</h2>
        </div>
        <div>
        <table className="table">
            <thead>
              <tr>
                <th>YEAR</th>
                <th>FILM</th>
                <th>AWARD</th>
                <th>CATEGORY</th>
                <th>RESULT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2008</td>
                <td>Life in a... Metro</td>
                <td>Filmfare Awards</td>
                <td>Best Supporting Actor</td>
                <td>Won</td>
              </tr>
              <tr>
                <td>2008</td>
                <td>Haasil</td>
                <td>Filmfare Awards</td>
                <td>Best Performance in a Negative Role</td>
                <td>Won</td>
              </tr>

              <tr>
                <td>2013</td>
                <td>Paan Singh Tomar</td>
                <td>Filmfare Awards</td>
                <td>Best Actor (Critics)</td>
                <td>Won</td>
              </tr>

              <tr>
                <td>2013</td>
                <td>Paan Singh Tomar</td>
                <td>National Film Awards</td>
                <td>Best Actor</td>
                <td>Won</td>
              </tr>

              <tr>
                <td>2018</td>
                <td>	Hindi Medium</td>
                <td>	Filmfare Awards</td>
                <td>	Best Actor</td>
                <td>Won</td>
              </tr>

              <tr>
                <td>2014</td>
                <td>The Lunchbox</td>
                <td>Asian Film Awards</td>
                <td>Best Actorr</td>
                <td>Won</td>
              </tr>

              <tr>
                <td>2011</td>
                <td>-------</td>
                <td>	Padma Shri</td>
                <td>	Arts</td>
                <td>Won</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          {/* Add more sections for other information */}
        </div>
      
     <div className='foot1'>
        <h4>THE GREAT ACTOR IRRFAN KHAN LEFT US ALONE</h4>
     </div>

     <div className='footmain'>
    <p>All Rights Reserved © Kajal Kamble</p>

</div>

    </section>
    
   
  );
};

export default PersonalityInfo;
