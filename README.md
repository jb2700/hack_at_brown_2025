# SkeletonKey: Precision Diagnoses Before You See a Doctor

To view the application on Expo Mobile, run this command locally. 
`npx expo start`

Then, scan the QR code with any compatible iOS device.

## Inspiration
Being unable to articulate what hurts is one of the most frustrating aspects of the patient experience. Through a longitudinal, and visually intuitive issue tracker, we allow pinpointing of pain points on a secure platform. A model agent equipped with the precise muscloskeletal location and intensity, in addition to any relevant contextual factors, carefully researches and returns potential causes and treatments. This allows patients to navigate harm in a number of ways. Firstly, our agent informs them of treatments for common issues, reducing the number of clinical interventions necessary. Second, our agent familiarizes and educates users about relevant medical terminology, putting them on stable footing when it comes to talking with healthcare providers and clinicians. Lastly, through creating records through our simple and intuitive interface, users establish a longitudinal record of their medical issues and treatment options. Such a longitudinal record replaces the all-too-common experience of Googling chronic or persistent pains (“pain in lower back”, “pain in back of leg”), reading a couple articles, and then forgetting about the issue until it happens again.

### What it does

Our app allows users to sign up and login to a secure platform, on which they can make queries and receive causes and treatment options. They are able to specify precise locations (e.g. lumbar vertebrae L4) through interactive diagrams of the human body. The purpose of SkeletonKey is not primarily to serve as an AI doctor, but to educate and inform users on available options, and prepare them for visits with family doctors or specialists. Furthermore, output from the issue tracker can also be converted into notes for clinical use. Our project creates a safer patient experience through empowering its users to discuss alternative treatments. During appointments, our platform saves time for multiple stakeholders by allowing patients and care providers to talk about the issues they care about the most.

## How we built it

The base application was built using React Native and Expo Go. For our backend, we used Supabase for user authentication as well as database storage. We defined reusable, modular functions for reading and editing skeletal and muscular structures, which are presented as SVGs in the issue creation page. We use the Gemini Pro API and send JSON input built from the user’s selections. The agent then returns structured text, which may include links (e.g. to specific potential conditions), videos (e.g. stretching or yoga exercises) or images (e.g. a specific anatomical diagram) back to the user in a consolidated main page.

## Challenges we ran into

- Finding freely available online anatomical models was one major challenge: for many online repositories, there is either a strict paywall or the anatomy was not specific enough. With the labeled vector files which did exist, traversing the hierarchical structures to identify named entities was challenging. Another issue we faced was learning React Native and dealing with the project structure. Neither of us had worked extensively with React Native prior to the hackathon, so we spent a good deal of time learning the unique challenges of mobile development. Additionally, a challenge was getting user authentication working. We had issues with our email verification process which made it difficult to implement. Another challenge was finding the correct LLM to use and integrating the LLM into the workflow through giving it information from the diagrams and user input.

## Accomplishments that we're proud of

We were able to find relevant, granular models on the Wikimedia Commons which were able to help. We restructured model view components to allow clickable groups within the SVGs. More broadly, we think that our application is able to uniquely add value on top of typical user-agent interaction by allowing users to intuitively and visually input problem areas of the body, which is then converted to anatomical terminology for the agent and any potential clinicians. This makes our frictionless approach a significant improvement upon existing services, and maximizes the value our agent is able to deliver.

## What we learned
We gained experience working with React Native and Expo in particular, as well as with JSX and the node.js ecosystem as a whole. Individually, we resolved issues relating to user authentication and deduplication, asynchronous API calls, and integrating multimodal cues into a text-based form.

## What's next for Information and Diagnosis for Patient-Doctor Interactions

One promising direction for further development is incorporating patient recording of doctor appointments into the record. If a patient decides to upload voice files to the application, a transcription can be used as a context for the LLM such that the patient is able to receive more accurate advice from their doctor. Another exciting direction for improvements is updating the LM with patient or case-specific memory: this allows the model to recall and iterate on diagnoses based on a longitudinal record.

We also plan to improve the language generation and structure of inputs, allowing the agent to provide better and more relevant feedback to the user, while maintaining a minimal time investment on the user’s part.
In the future, we may also consider utilizing a model that has been pretrained on more specific medical terminology, in order to inform patients best about their treatment options and alternatives.
