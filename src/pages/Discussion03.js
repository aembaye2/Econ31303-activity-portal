import React from "react"
import QuestionsComponent from "../components/QuestionsComponent"
import data from "./questions3.json" // Import the JSON file

const Discussion03 = () => {
  const currentDate = new Date()
  const targetDate = new Date("2024-11-14T11:30:00")
  const endDate = new Date("2024-11-19T23:15:00")

  const isAvailable = currentDate >= targetDate && currentDate <= endDate

  return (
    <div>
      <h1>Discussion 3: AD-AS model application</h1>
      {isAvailable ? (
        <QuestionsComponent questions={data.questions} />
      ) : (
        <p>Not available yet or past due</p>
      )}
    </div>
  )
}

export default Discussion03
