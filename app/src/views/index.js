import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import { Button, Stack, Typography, Card, CardContent, CardActions, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';
import OutboxIcon from '@mui/icons-material/Outbox';

export default function Index(props) {


    return (
        <Page title="index">
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h1" component="div">
                        Welcome
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>

                </CardContent>
            </Card>
        </Page>
    );
}
