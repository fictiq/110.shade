
import {hexagon} from '@robot/hexagon'

import * as ActFce from "@shade/02.surface.unit/surface.action";
import * as ActTxt from "@shade/05.text.unit/text.action";
import * as ActCan from "@shade/03.container.unit/container.action";
import * as ActHex from "@shade/07.hexagon.unit/hexagon.action";


import React from 'react'

import { createActor, createMachine } from 'xstate';


let hunt;
const Test =  (bus) => {

  hunt = bus;
  var bit;

  var sim =  hunt.sim
      
  bit = sim(ActTxt.WRITE_TEXT, { idx: "txt02", dat: { txt: 'hexagon----' } })
      

  //var mech = createMachine(logic)
    const actor = createActor( hexagon );

    actor.subscribe(async (snapshot) => {

      
      bit = await sim(ActTxt.WRITE_TEXT, { idx: "txt02", dat: { txt: JSON.stringify(snapshot) } })
      

    });

    actor.start();

    // Now the actor can receive events
    actor.send({ type: 'BEGIN' });





  return (
    <div>
      Testing hexagon...
    </div>
  )


}

export default Test


