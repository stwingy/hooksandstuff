import React,{useContext,useState} from 'react'
import myContext from './context'
import {scoreR} from './reducers'
import RuleRow from './RuleRow'
import './ScoreTable.css'
function ScoreTable() {
  
    const { state, setState,scoreReducer } = useContext(myContext);
    const a =state.diceArray
   
//    function getTotalScore() {
//     //const { scores } = this.props;
//     let totalScore = 0;
//     for (let key in scores) {
//       if (scores[key]) totalScore += scores[key];
//     }
//     return totalScore;
//   }
//     //const { scores, doScore } = this.props;


    return (
        <div className='ScoreTable'>
          <section className='ScoreTable-section'>
            <h2>Upper</h2>
            <table cellSpacing='0'>
              <tbody>
                <RuleRow
                  name='Ones'
               id={0}
                  description="1 point per 1"
                  doScore={id => scoreReducer(a, { type: 'UPPER', payload: '1' },id)}
                />
                <RuleRow
                  name='Twos'
                  id={1}
                  description="2 points per 2"
                  doScore={id => scoreReducer(a, { type: 'UPPER', payload: '2' },id)}
                />
                <RuleRow
                  name='Threes'
                  id={2}
                  description="3 points per 3"
                  doScore={id => scoreReducer(a, { type: 'UPPER', payload: '3' },id)}
                />
                <RuleRow
                  name='Fours'
                  id={3}
                  description="4 points per 4"
                  doScore={id => scoreReducer(a, { type: 'UPPER', payload: '4' },id)}
                />
                <RuleRow
                  name='Fives'
                  id={4}
                  description="5 points per 5"
                  doScore={id => scoreReducer(a, { type: 'UPPER', payload: '5' },id)}
                />
                <RuleRow
                  name='Sixes'
                  id={5}
                  description="6 points per 6"
                  doScore={id => scoreReducer(a, { type: 'UPPER', payload: '6' },id)}
                />
              </tbody>
            </table>
          </section>
          <section className='ScoreTable-section ScoreTable-section-lower'>
            <h2>Lower</h2>
            <table cellSpacing='0'>
              <tbody>
                <RuleRow
                  name='Three of Kind'
                  id={6}
                  description="Sum all dice if 3 are the same"
                  doScore={id => scoreReducer(a,{type:"THREEOFAKIND"},id)}
                />
                <RuleRow
                  name='Four of Kind'
                  id={7}
                  description="Sum all dice if 4 are the same"
                  doScore={id => scoreReducer(a,{type:"FOUROFAKIND"},id)}
                />
                <RuleRow
                  name='Full House'
                  id={8}
                  description="25 points for a full house"
                  doScore={id => scoreReducer(a,{type:"FULLHOUSE"},id)}
                />
                <RuleRow
                  name='Small Straight'
                  id={9}
                  description="30 points for a small straight"
                  doScore={id => scoreReducer(a,{type:"SMALLSTRAIGHT"},id)}
                />
                <RuleRow
                  name='Large Straight'
                  id={10}
                  description="40 points for a large straight"
                  doScore={id => scoreReducer(a,{type:"LARGESTRAIGHT"},id)}
                />
                <RuleRow
                  name='Yahtzee'
                  id={11}
                  description="50 points for yahtzee"
                  doScore={id => scoreReducer(a,{type:"YAHTZEE"},id)}
                />
                <RuleRow
                  name='Chance'
                  id={12}
                  description="Sum of all dice"
                  doScore={id => scoreReducer(a,{type:"CHANCE"},id)}
                />
              </tbody>
            </table>
          </section>
          <h2>TOTAL SCORE:{state.total} </h2>
        </div>
      );
}

export default ScoreTable
