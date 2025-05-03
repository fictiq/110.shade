import * as ActFce from '../110.shade/02.surface.unit/surface.action'

import { useQuery } from "@tanstack/react-query"

export function useWriteSurface(idx) {
    return useQuery({
        queryFn: async () => {
          let bit;

          if ( idx != null ){
            bit =  await window['SHADE']( ActFce.WRITE_SURFACE, { idx })
          }else{
            //bit =  await window['SHADE']( ActFce, { idx })

          }


            return bit

        },
        queryKey: ['writeSurface']
    })
}

