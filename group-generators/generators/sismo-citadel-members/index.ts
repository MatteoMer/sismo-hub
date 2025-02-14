
import { Tags, ValueType, GroupWithData } from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

const generator: GroupGenerator = {
  
  generationFrequency: GenerationFrequency.Daily,
  
  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
  
    const members = {
      "telegram:kprasch":"1",
      "github:theref":"1",
      "github:meatballs":"1",
      "github:TheoLeFur":"1",
      "twitter:aiden_pearce04":"1",
      "github:L0GYKAL":"1",
      "github:AlbertoCentonze":"1",
      "twitter:NOOVHILS":"1",
      "github:kvncnls":"1",
      "github:abdtimur":"1",
      "github:raigal-r":"1",
      "github:Complexia":"1",
      "github:wannabehero":"1",
      "github:taijusanagi":"1",
      "github:catmcgee":"1",
      "github:Deepcryptodive":"1",
      "telegram:slyracoon23":"1",
      "github:misirov":"1",
      "github:Deivitto":"1",
      "github:luksgrin":"1",
      "github:Baraa42":"1",
      "github:mmatteo23":"1",
      "github:0xCaso":"1",
      "github:emilianobonassi":"1",
      "github:cesarhuret":"1",
      "twitter:afk0b":"1",
      "github:christianholman":"1",
      "github:wslyvh":"1",
      "github:gabrielantonyxaviour":"1",
      "github:tiagofneto":"1",
      "telegram:d_roak":"1",
      "github:0x471":"1",
      "twitter:piapark_eth":"1",
      "twitter:matteo_mer":"1",
      "twitter:wojtekwtf":"1",
      "github:BayramAnnakov":"1",
      "github:LarryLeftwood":"1",
      "twitter:albiverse":"1",
      "twitter:cryptograthor":"1",
      "twitter:backaes":"1",
      "github:sampolgar":"1",
      "twitter:dcbuild3r":"1",
      "twitter:0x_Osprey":"1",
      "twitter:middleway_eth":"1",
      "twitter:Hazelstar_":"1",
      "twitter:lemiscate":"1"
    };

    return [
      {
        name: "sismo-citadel-members",
        timestamp: context.timestamp,
        description: "Sismo Citadel Members",
        specs: "This Group consists of all hackathon bounty winners and friends of Sismo",
        data: members,
        valueType: ValueType.Score,
        tags: [Tags.Builders],
      },
    ];
  },
};

export default generator;
