export class Organisation {
    update(event: string): Organisation {
        return this;
    }

    teamCount() {
        return 0
    }

    personCount() {
        return 1
    }

    managerWithMostDirectReport() {
        return null
    }

    teamWithMostPeopleAssigned() {
        return null
    }
}
