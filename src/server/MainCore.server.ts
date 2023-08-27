import { Players, Workspace, CollectionService } from "@rbxts/services";

const KillParts = CollectionService.GetTagged("D");
const deb = new Set();

for (const part of KillParts) {
	if (part.IsA("Part")) {
		part.Touched.Connect(function (otherPart: BasePart) {
			if (otherPart && otherPart.Parent) {
				const isPlayer = Players.GetPlayerFromCharacter(otherPart.Parent);
				if (typeOf(isPlayer) !== "nil") {
					if (!deb.has(isPlayer)) {
						deb.add(isPlayer);
                        print("e");

						task.spawn(function () {
							task.wait(1);
							deb.delete(isPlayer);
						});
					}
				}
			}
		});
	}
}
