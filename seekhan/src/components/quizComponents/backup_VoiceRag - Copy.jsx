import React from "react";
import download from "../assets/download.png";

function VoiceRag() {

  
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[1100px] h-screen bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 flex flex-col gap-y-[2px]">
        <div className="flex-grow bg-gray-900 w-full flex flex-col h-auto overflow-y-auto scrollbar text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolorum vitae dolore, voluptatibus consequuntur doloribus illum
          recusandae voluptate magnam amet iure ipsum ullam provident nesciunt
          assumenda, quod facilis. Non, id. Placeat assumenda qui cum, corporis
          iure neque culpa possimus expedita! Quasi distinctio earum repellat
          assumenda atque ad perferendis nostrum magnam. Similique, perferendis
          accusantium rem praesentium sapiente mollitia sed neque laborum.
          Cupiditate ut pariatur, doloremque quos fugit praesentium cumque
          nobis? Commodi repellat id incidunt sunt a porro adipisci reiciendis
          laboriosam! Dolor rem illum asperiores tempore modi repellat possimus
          minus eaque at? Saepe, deserunt harum architecto iure laborum dolore
          impedit error necessitatibus quod, ipsa molestias aliquid. Quod a,
          aliquam nihil dolore minus, laudantium iste assumenda tenetur quo
          illum temporibus aperiam, obcaecati asperiores. Corporis earum
          aspernatur asperiores consectetur vel, nobis rem saepe nam praesentium
          temporibus magni assumenda eum deserunt at minus officiis commodi
          perspiciatis fuga reprehenderit maxime repellat quaerat, quibusdam
          possimus quis. Culpa? Incidunt, fuga vero error ab blanditiis odit eum
          amet ex esse qui quidem, totam placeat aut nostrum ducimus animi
          doloribus modi reiciendis, vel deleniti saepe quaerat quisquam odio?
          Sint, corporis. Optio ratione consequatur at! Iste labore odit libero.
          Dolores officia praesentium laborum, suscipit veritatis facilis. Sit
          eum cumque ratione. Tempora doloribus obcaecati dolore officiis
          libero. Voluptas minus eveniet consequuntur magni! Rem,
          exercitationem. Alias quaerat rerum quia dolorum debitis nesciunt
          soluta dolor impedit consequuntur inventore, nulla cumque sequi natus
          quae illo fugit accusamus quam tempora? Fugiat iste animi nulla at
          nemo! Reiciendis nisi ea mollitia nesciunt a similique unde aliquid?
          Reiciendis modi eligendi tenetur placeat. Commodi dolore impedit fuga
          omnis dolorem, mollitia exercitationem adipisci repudiandae id aut
          vero aliquid itaque perspiciatis. Provident, nostrum! Temporibus
          blanditiis atque placeat accusamus est labore sapiente quam facilis
          qui suscipit animi, eos adipisci? Exercitationem non nostrum
          voluptatem, voluptates rem excepturi ad, quia at iusto, provident
          ipsum! Asperiores non eius quos earum qui. At blanditiis aperiam
          minima quaerat qui maxime distinctio, deserunt facere. Rem recusandae
          maxime corrupti aperiam temporibus, voluptate a quisquam dolores!
          Reprehenderit corporis esse deserunt. Unde eos placeat dolorem alias,
          nostrum eligendi, praesentium sed illo a beatae vel nulla aliquam iste
          earum deserunt deleniti molestias temporibus? Illum officia, nisi
          sapiente alias assumenda iusto esse recusandae! Nihil magnam fugit
          doloremque obcaecati dolores dicta nemo ad odit sequi, quisquam
          facilis sapiente quos atque quibusdam quod velit tenetur, eveniet
          natus? Dicta incidunt, odio quo ipsum reiciendis velit rerum!
          Reprehenderit laboriosam sunt deserunt maiores officia, dolores quia
          eius maxime error mollitia itaque. Suscipit quisquam nesciunt quam
          tempore quod impedit ducimus eligendi libero sunt sint. Facilis,
          assumenda. Sunt, vitae et! Veritatis officia libero, ut est quidem
          modi nisi, totam praesentium iure repellat maiores alias magnam!
          Voluptates animi doloremque, aperiam quia sequi libero quibusdam!
          Distinctio cumque minima in sint aut hic? Pariatur amet dolor nihil
          voluptates similique, quae reiciendis cum ab autem itaque ad eaque
          vitae fuga deserunt. Numquam quam nam aut ratione assumenda distinctio
          explicabo voluptate. Saepe veritatis laboriosam et. Recusandae nihil
          dolor dolorum ea eaque consectetur quia eos explicabo, earum tenetur
          pariatur officia itaque corrupti similique veritatis magni sit harum
          temporibus! Omnis, dolores! Molestias explicabo ullam placeat iusto
          quidem. Inventore similique sit maiores, praesentium, assumenda
          suscipit quae eaque voluptatibus possimus iste nihil beatae cum sunt
          nam quasi quam aliquid voluptatum incidunt excepturi odit
          necessitatibus aliquam? Soluta doloremque asperiores eveniet. Rem
          nulla labore error adipisci amet deserunt, ducimus obcaecati magni
          explicabo aliquam eaque iure maiores sint temporibus aspernatur enim
          aperiam dolorem itaque eum, quasi quam dignissimos. Tempore quisquam
          omnis amet. Labore veniam eum tempore aspernatur excepturi at officia
          totam. Possimus doloremque hic aperiam laborum soluta magni laudantium
          consequuntur eos. Exercitationem nihil quisquam corrupti natus et,
          esse tempore quasi cumque nobis.
        </div>
        <div className="flex flex-row">
          <form className="space-y-4 bg-gray-800 min-h-[150px] flex-grow">
            <div className="flex flex-row gap-x-5">
              <div className="flex-grow space-y-2">
                <div>
                  <label className="block text-white" htmlFor="file">
                    Upload a MP3file:
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-white">
                    Question Type:
                  </label>
                  <select
                    name="type"
                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                    defaultValue={"multiple-choice"}
                  >
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    <option value="fill-in-the-blank">Fill-in-the-Blank</option>
                  </select>
                </div>
              </div>
              <div className="w-[300px] flex flex-col justify-center items-center gap-y-7">
                <div className="w-[300px] flex flex-row justify-center items-center gap-x-2">
                  <div className="flex-grow">
                    <label className="block text-white" htmlFor="questions">
                      Number of questions:
                    </label>
                    <input
                      type="number"
                      id="questions"
                      min={1}
                      className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400"
                      placeholder="Number of questions"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full p-3 bg-blue-600 text-white rounded-lg"
                >
                  Generate Questions
                </button>
              </div>
            </div>
          </form>
          <div>
            <button className="ml-4">
              <img
                src={download}
                alt="Download File"
                className="w-[50px] h-[50px] mt-7"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceRag;
