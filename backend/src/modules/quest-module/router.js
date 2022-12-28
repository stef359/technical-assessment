import express from 'express';
import { HeroesDB } from '../../database/HeroesDB.js';
import { Hero } from '../../types/Hero.js';
import { QuestsDB } from '../../database/QuestsDB.js';
import { Quest } from '../../types/Quest.js';

export function questsRouter() {
    const router = express.Router();

    router.get('/heroes/:id/quests', (req, res) => {
        res.send(QuestsDB.getInstance().getQuestbyHeroID(req.params.id));
    });

    router.post('/heroes/:id/quests', (req, res) => {
        const body = req.body;
        body.heroid = req.params.id;
        const quest = new Quest(body);
        QuestsDB.getInstance().createQuest(quest);
        res.sendStatus(201);
    });

    router.patch('/heroes/:heroId/quests/:questId', (req, res) => {
        const id = req.params.heroId;
        const questId = req.params.questId;
        const body = req.body;
        
        const hero = HeroesDB.getInstance().getHero(id);
        const quest = QuestsDB.getInstance().getQuest(questId);
        if (!hero || !quest) {
            res.sendStatus(404);
        } else {
            QuestsDB.getInstance().updateQuest(questId, body);
            res.sendStatus(204);
        }
    });

    router.delete('/heroes/:heroId/quests/:questId', (req, res) => {
        const id = req.params.heroId;
        const questId = req.params.questId;

        const hero = HeroesDB.getInstance().getHero(id);
        const quest = QuestsDB.getInstance().getQuest(questId);
        if (!hero || !quest) {
            res.sendStatus(404);
        } else {
            QuestsDB.getInstance().deleteQuest(questId);
            res.sendStatus(204);
        }
    });

    return router;
}