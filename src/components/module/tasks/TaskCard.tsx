import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { ITask } from "@/types";

import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {

  const dispatch = useDispatch();

  return (
    <div className="border px-5 py-3 rounded-md ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>

          <h1>{task.title}</h1>
        </div>

        <div className="flex gap-3 items-center">
          <Button
          onClick={() => dispatch(deleteTask(task.id))}
           variant="link" className="p-text-red-500">
            <Trash2 />
          </Button>

          <Checkbox onClick={() => dispatch(toggleCompleteState(task.id))}/>
        </div>
      </div>

      <p className="mt-5">{task.description}</p>
    </div>
  );
}
