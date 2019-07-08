export const helptextsNb = {
  anbefaltTermTitle: 'Anbefalt term',
  anbefaltTermAbstract:
    'Her registrerer du den anbefalte termen (begrepets navn) som du mener bør brukes for begrepet.',
  anbefaltTermDescription: `
Anbefalt term er den termen som blir sett på som den best egnede for begrepet.

Har du behov for synonymer eller forkortelser, legg dem inn som [tillatt term](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#_5_2_tillatt_term). 
    
Merk at du ikke bør registrere egennavn (f.eks. produktnavn), fordi disse ikke regnes som termer.
    
Se mer om ‘anbefalt term’ ’i [veileder for begrepsbeskrivelser](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#anbefalt)`,
  definisjonTitle: 'Definisjon',
  definisjonAbstract: 'Her registrerer du meningsinnholdet til begrepet uttrykt gjennom en setning. ',
  definisjonDescription: `En definisjon er en beskrivelse som avgrenser begrepet mot beslektede begreper. Definisjonen er altså begrepet forklart med ord.

En definisjon skal ikke være en utfyllende innføring i begrepet. Den skal være en kort forklaring som tydelig avgrenser til andre, nærliggende begreper, eventuelt tydeliggjør forskjellen mellom dette begrepet og andre nærliggende begreper.

Et eksempel er bonus i arbeidsforhold, som av Skatteetaten blir definert som ‘godtgjørelse som kan knyttes direkte til innsats eller resultater i en virksomhet’.

Fagområder vil også sette begrensninger i hvilken sammenheng begrepet og definisjonen skal forstås.

Se mer om ‘definisjon’ i [veileder for begrepsbeskrivelser](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#definisjon)`,
  tillattTermTitle: 'Tillat term',
  tillattTermAbstract: 'Her registrerer du et tillatt synonym som kommer i tillegg til den anbefalte termen. ',
  tillattTermDescription: `Term som blir sett på som egnet for begrepet, og som blir brukt i tillegg til en anbefalt term. Det kan være nødvendig hvis flere termer er i bruk for begreper, eller om det er nødvendig å føre opp enkle, brukerrettede termer for allmennheten i tillegg til anbefalt term.

Et eksempel er betalingsfritak, som i tillegg har flere tillatte termer: premiefritak og innskuddsfritak hos [Finans Norge](https://www.finansnorge.no/ordliste/). 

Du kan også bruke dette feltet til å legge inn forkortelser som tillatte termer. 

Se mer om ‘tillatt term’ i [veileder for begrepsbeskrivelser.](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#_5_2_tillatt_term)`,
  fraraadetTermTitle: 'Frarådet term',
  fraraadetTermAbstract: 'Her kan du registrere én eller flere termer som du ikke ønsker skal benyttes. ',
  fraraadetTermDescription: `Term som blir sett på som uegnet for begrepet.

Noen ganger finnes det termer som blir brukt, men som er upresise, foreldet eller av andre grunner uønsket. Dersom du velger å registrere slike termer som ‘frarådet term’, kan de gi treff i søk og omdirigere brukeren til anbefalt term. 

Et annet eksempel på frarådet term er den historiske betegnelsen selvangivelse hos Skatteetaten, som nå heter skattemelding.

Et annet eksempel på frarådet term er pappapermisjon, som ikke blir brukt av Nav, som har fedrekvote som anbefalte term.  

Se mer om ‘frarådet term’ i [veileder for begrepsbeskrivelser](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#_5_3_frar%C3%A5det_term)`,
  eksempelTitle: 'Eksempel',
  eksempelAbstract: 'Her kan du legge til noen eksempler på begrepet.',
  eksempelDescription: `Liste over noen konkrete tilfeller som omfattes av begrepet 

Dette kan for eksempel være av pedagogiske hensyn eller for å illustrere begrepet.

Eksempler på ‘løsøre’ kan være:tankskip, motorkjøretøy, vaffeljern, sementsekk, konvolutt, eple, men ikke så lenge eplet henger på treet

Dersom listen av eksempler er komplett, skal feltet ‘omfang’ benyttes.

Se mer om ‘eksempel’ i [veileder for begrepsbeskrivelser](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#omfang)`,
  fagomraadeTitle: 'Fagområde',
  fagomraadeAbstract: 'Her fører du opp hvilket fagområde begrepet tilhører.',
  fagomraadeDescription: `Et fagområde er et spesialisert kunnskapsområde som et begrep tilhører, f.eks. ‘Helse’ for begrepet ‘helsetilstand’.

Du kan bare registrere ett fagområde til et begrep.

Dersom et begrep blir brukt innenfor flere faglige sammenhenger, skal du heller benytte feltet ‘bruksområde’. Et fagområde er gjerne mer overordnet enn bruksområdene.

Se mer om ‘fagområde’ i [veileder for begrepsbeskrivelser](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#_10_fagomr%C3%A5de_og_bruksomr%C3%A5de)`,
  bruksomraadeTitle: 'Bruksområde(r)',
  bruksomraadeAbstract: 'Her fører du opp et eller flere bruksområder der begrepet er i bruk. ',
  bruksomraadeDescription: `Et bruksområde er en faglig eller juridisk sammenheng der begrepet blir brukt, f.eks. (hos Nav) hjelpemidler, trygdeytelser, arbeidsmarkedstiltak

For eksempel har begrepet helsetilstand ‘helse’ som fagområde og ‘hjelpemidler’, ‘trygdeytelser’, ‘arbeidsmarkedstiltak’ som bruksområder.

Se mer om ‘bruksområde’ i [veileder for begrepsbeskrivelser](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#_10_fagomr%C3%A5de_og_bruksomr%C3%A5de)`,
  omfangTitle: 'Omfang',
  omfangAbstract: 'Her fører du opp verdiområde, for eksempel alle kategoriene  som er gyldige for begrepet',
  omfangDescription: `Omfang i denne sammenheng betyr lovlige kategorier eller verdiområder for begrepet.

Eksempel på kategorier: Standard for sivilstand spesifiserer hva som er lovlige kategorier for begrepet ‘sivilstand’, f.eks. ugift, gift og skilt.

Eksempel på verdiområde: For begrepet ‘alder’ kan verdiområdet beskrives som “alle positive tall”.

Dette feltet skal ikke brukes for å oppgi eksempler.  

Se mer om ‘omfang’ i [veileder for begrepsbeskrivelser](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#omfang)`,
  kontaktinformasjonTitle: 'Kontaktinformasjon',
  kontaktinformasjonAbstract: 'Her fører du opp kontaktinformasjon hos ansvarlig virksomhet for begrepet.',
  kontaktinformasjonDescription: `Du kan gjerne oppgi en organisatorisk underenhet, men du skal  ikke bruke kontaktpunkter ned til enkeltpersoner i en virksomhet.

Eksempel på kontaktinformasjon kan være: 

Epost: informasjonsforvaltning@brreg.no

Telefon: +4775007500

Se mer om ‘kontaktinformasjon’ i [veileder for begrepsbeskrivelser](https://doc.difi.no/data/veileder-for-begrepsbeskrivelser/#_12_ansvarlig_virksomhet_og_kontaktpunkt)`
};
